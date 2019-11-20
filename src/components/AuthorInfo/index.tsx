import React, { Component } from 'react';
import { connect } from 'dva';
import { AuthorModelState, CurrentAuthor } from '@/models/author';
import styles from '@/components/AuthorInfo/index.less';
import { Card, Divider, Tag } from 'antd';
import { ConnectProps } from '@/models/connect';
import { Link } from 'umi';

interface AuthorInfoProps extends ConnectProps {
  currentAuthor: CurrentAuthor;
  currentAuthorLoading?: boolean;
}

@connect(({ author }: { author: AuthorModelState }) => ({
  currentAuthor: author.currentAuthor,
}))
class AuthorInfo extends Component<Partial<AuthorInfoProps>> {
  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: 'author/fetchCurrentAuthor',
      });
    }
  }

  render() {
    const { currentAuthor, currentAuthorLoading = false } = this.props;
    const dataLoading =
      currentAuthorLoading || !(currentAuthor && Object.keys(currentAuthor).length);
    return (
      <Card bordered={false} loading={dataLoading} bodyStyle={{ padding: 0 }}>
        {!dataLoading ? (
          <div>
            <div className={styles.overlay} />
            <div className={styles.intrudeLess}>
              <div className={styles.avatar}>
                <Link to="/">
                  <img className={styles.avatarImg} alt="" src={currentAuthor.avatar} />
                </Link>
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
                  {currentAuthor.city.province.name}
                  {currentAuthor.city.name}
                </p>
              </div>
              <Divider dashed />
              <div className={styles.tags}>
                <div className={styles.tagsTitle}>标签</div>
                {currentAuthor.tags.map(item => (
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
