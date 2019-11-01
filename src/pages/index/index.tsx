import { Card, Col, Divider, Row, Tag } from 'antd';
import React, { PureComponent } from 'react';

import { Dispatch } from 'redux';
import { GridContent } from '@ant-design/pro-layout';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'dva';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Applications from './components/Applications';
import styles from './Center.less';
import { AuthorModelState, CurrentAuthor } from '@/models/author';
import { TagType } from '@/models/global';

interface IndexProps extends RouteChildrenProps {
  dispatch: Dispatch<any>;
  currentAuthor: CurrentAuthor;
  currentAuthorLoading: boolean;
}

interface IndexState {
  newTags: TagType[];
  tabKey: 'articles' | 'applications' | 'projects';
}

@connect(
  ({
    loading,
    author,
  }: {
    loading: { effects: { [key: string]: boolean } };
    author: AuthorModelState;
  }) => ({
    currentAuthor: author.currentAuthor,
    // TODO: 根据loading计算出来
    currentAuthorLoading: false,
  }),
)
class Index extends PureComponent<IndexProps, IndexState> {
  // static getDerivedStateFromProps(
  //   props: IndexProps,
  //   state: IndexState,
  // ) {
  //   const { match, location } = props;
  //   const { tabKey } = state;
  //   const path = match && match.path;

  //   const urlTabKey = location.pathname.replace(`${path}/`, '');
  //   if (urlTabKey && urlTabKey !== '/' && tabKey !== urlTabKey) {
  //     return {
  //       tabKey: urlTabKey,
  //     };
  //   }

  //   return null;
  // }

  state: IndexState = {
    newTags: [],
    tabKey: 'articles',
  };

  componentDidMount() {
    const { dispatch, currentAuthor } = this.props;
    dispatch({
      type: 'author/fetchCurrentAuthor',
    });
    dispatch({
      type: 'post/queryPostList',
      payload: {
        authorId: 1,
        pageNum: 1,
        size: 20,
      },
    });
  }

  onTabChange = (key: string) => {
    // If you need to sync state to url
    // const { match } = this.props;
    // router.push(`${match.url}/${key}`);
    this.setState({
      tabKey: key as IndexState['tabKey'],
    });
  };

  renderChildrenByTabKey = (tabKey: IndexState['tabKey']) => {
    if (tabKey === 'projects') {
      return <Projects />;
    }
    if (tabKey === 'applications') {
      return <Applications />;
    }
    if (tabKey === 'articles') {
      return <Articles />;
    }
    return null;
  };

  render() {
    const { newTags, tabKey } = this.state;
    const { currentAuthor, currentAuthorLoading } = this.props;
    const dataLoading =
      currentAuthorLoading || !(currentAuthor && Object.keys(currentAuthor).length);
    return (
      <GridContent>
        <Row gutter={24}>
          <Col lg={7} md={24}>
            <Card bordered={false} style={{ marginBottom: 24 }} loading={dataLoading}>
              {!dataLoading ? (
                <div>
                  <div className={styles.avatarHolder}>
                    <img alt="" src={currentAuthor.avatar} />
                    <div className={styles.name}>{currentAuthor.name}</div>
                    <div>{currentAuthor.signature}</div>
                  </div>
                  <div className={styles.detail}>
                    <p>
                      <i className={styles.job} />
                      {currentAuthor.job}
                    </p>
                    <p>
                      <i className={styles.group} />
                      {currentAuthor.group}
                    </p>
                    <p>
                      <i className={styles.address} />
                      {currentAuthor.city.province.name}
                      {currentAuthor.city.name}
                    </p>
                  </div>
                  <Divider dashed />
                  <div className={styles.tags}>
                    <div className={styles.tagsTitle}>标签</div>
                    {currentAuthor.tags.concat(newTags).map(item => (
                      <Tag key={item.code}>{item.name}</Tag>
                    ))}
                  </div>
                </div>
              ) : null}
            </Card>
          </Col>
          <Col lg={17} md={24}>
            <Card
              className={styles.tabsCard}
              bordered={false}
              activeTabKey={tabKey}
              onTabChange={this.onTabChange}
            >
              {this.renderChildrenByTabKey(tabKey)}
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default Index;
