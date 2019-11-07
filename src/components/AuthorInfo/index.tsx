import React, { Component } from 'react';
import { connect } from 'dva';
import { AuthorModelState, CurrentAuthor } from '@/models/author';
import styles from '@/components/AuthorInfo/index.less';
import { Card, Divider, Tag } from 'antd';
import { ConnectProps } from '@/models/connect';

interface AuthorInfoState {
  currentAuthor: CurrentAuthor;
  currentAuthorLoading?: boolean;
}

@connect(({ author }: { author: AuthorModelState }) => ({
  currentAuthor: author.currentAuthor,
}))
class AuthorInfo extends Component<ConnectProps> {
  state: AuthorInfoState = {
    currentAuthor: {},
    currentAuthorLoading: true,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: 'author/fetchCurrentAuthor',
        callback: (res: CurrentAuthor) => {
          this.setState({
            currentAuthor: res,
            currentAuthorLoading: false,
          });
          dispatch({
            type: 'post/queryPostList',
            payload: {
              authorId: res.authorId,
              pageNum: 0,
              size: 5,
            },
          });
        },
      });
    }
  }

  render() {
    const { currentAuthor, currentAuthorLoading } = this.state;
    const dataLoading =
      currentAuthorLoading || !(currentAuthor && Object.keys(currentAuthor).length);
    const city =
      currentAuthor.city == null
        ? {
            name: '',
            province: {
              name: '',
            },
          }
        : currentAuthor.city;
    const tags = currentAuthor.tags == null ? [{ name: '', code: '' }] : currentAuthor.tags;
    return (
      <Card bordered={false} loading={dataLoading} bodyStyle={{ padding: 0 }}>
        {!dataLoading ? (
          <div>
            <div className={styles.overlay} />
            <div className={styles.intrudeLess}>
              <div className={styles.avatar}>
                <img alt="" src={currentAuthor.avatar} />
              </div>
              <div className={styles.avatarHolder}>
                <div className={styles.name}>{currentAuthor.name}</div>
                <div className={styles.signature}>{currentAuthor.signature}</div>
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
                  {city.province.name}
                  {city.name}
                </p>
              </div>
              <Divider dashed />
              <div className={styles.tags}>
                <div className={styles.tagsTitle}>标签</div>
                {tags.map(item => (
                  <Tag key={item.code}>{item.name}</Tag>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </Card>
    );
  }
}

export default AuthorInfo;
