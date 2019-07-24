import { Card, Col, Divider, Icon, Input, Row, Tag } from 'antd';
import React, { PureComponent } from 'react';

import { Dispatch } from 'redux';
import { GridContent } from '@ant-design/pro-layout';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'dva';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Applications from './components/Applications';
import styles from './Center.less';
import { AuthorModelState, CurrentAuthor, TagType } from '@/models/author';

const operationTabList = [
  {
    key: 'articles',
    tab: (
      <span>
        文章 <span style={{ fontSize: 14 }}>(8)</span>
      </span>
    ),
  },
  // {
  //   key: 'applications',
  //   tab: (
  //     <span>
  //       应用 <span style={{ fontSize: 14 }}>(8)</span>
  //     </span>
  //   ),
  // },
  // {
  //   key: 'projects',
  //   tab: (
  //     <span>
  //       项目 <span style={{ fontSize: 14 }}>(8)</span>
  //     </span>
  //   ),
  // },
];

interface IndexProps extends RouteChildrenProps {
  dispatch: Dispatch<any>;
  currentAuthor: CurrentAuthor;
  currentAuthorLoading: boolean;
}

interface IndexState {
  newTags: TagType[];
  tabKey: 'articles' | 'applications' | 'projects';
  inputVisible: boolean;
  inputValue: string;
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
    inputVisible: false,
    inputValue: '',
    tabKey: 'articles',
  };

  public input: Input | null | undefined = undefined;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'author/fetchCurrentAuthor',
    });
    dispatch({
      type: 'index/fetch',
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

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input && this.input.focus());
  };

  saveInputRef = (input: Input | null) => {
    this.input = input;
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { state } = this;
    const { inputValue } = state;
    let { newTags } = state;
    if (inputValue && newTags.filter(tag => tag.name === inputValue).length === 0) {
      newTags = [...newTags, { code: `new-${newTags.length}`, name: inputValue }];
    }
    this.setState({
      newTags,
      inputVisible: false,
      inputValue: '',
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
    const { newTags, inputVisible, inputValue, tabKey } = this.state;
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
                      {currentAuthor.geographic.province.name}
                      {currentAuthor.geographic.city.name}
                    </p>
                  </div>
                  <Divider dashed />
                  <div className={styles.tags}>
                    <div className={styles.tagsTitle}>标签</div>
                    {currentAuthor.tags.concat(newTags).map(item => (
                      <Tag key={item.code}>{item.name}</Tag>
                    ))}
                    {inputVisible && (
                      <Input
                        ref={ref => this.saveInputRef(ref)}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                      />
                    )}
                    {!inputVisible && (
                      <Tag
                        onClick={this.showInput}
                        style={{ background: '#fff', borderStyle: 'dashed' }}
                      >
                        <Icon type="plus" />
                      </Tag>
                    )}
                  </div>
                </div>
              ) : null}
            </Card>
          </Col>
          <Col lg={17} md={24}>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
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
