import React, { PureComponent } from 'react';
import { PostInfo } from '@/models/post';
import { Card } from 'antd';
import ReactMarkdown from 'react-markdown';
import styles from './index.less';
import Meta from 'antd/lib/card/Meta';
import moment from 'moment';
import IconText from '@/components/IconText/IconText';
import Tag from '@/components/Tag';

interface SimplePostInfoProps {
  post: PostInfo;
}

class SimplePostInfo extends PureComponent<SimplePostInfoProps> {
  render() {
    const { post } = this.props;
    return (
      <Card className={styles.postInfo}>
        <Meta
          description={
            <div>
              <div className={styles.postTitle}>
                <a href="#" className={styles.postTitle_a}>
                  {post.title}
                </a>
                <div className={styles.postTitle_createTime}>
                  <IconText type="calendar" text={moment(post.createTime).format('YYYY-MM-DD')} />
                </div>
              </div>
              <div className={styles.postTitle_tags}>
                <IconText type="read-o" text={<Tag text={post.readTimes} href="#" />} />
                <IconText type="like-o" text={<Tag text={post.likedTimes} href="#" />} />
              </div>
            </div>
          }
        />
        <ReactMarkdown source={post.previewContent} />
      </Card>
    );
  }
}

export default SimplePostInfo;
