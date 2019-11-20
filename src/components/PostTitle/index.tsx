import React, { PureComponent, ReactNode } from 'react';
import { PostInfo } from '@/models/post';
import { Card } from 'antd';
import styles from './index.less';
import Meta from 'antd/lib/card/Meta';
import moment from 'moment';
import IconText from '@/components/IconText/IconText';
import Tag from '@/components/Tag';
import { Link } from 'umi';

interface PostTitleProps {
  post: PostInfo;
  content: ReactNode;
}

class PostTitle extends PureComponent<PostTitleProps> {
  render() {
    const { post, content } = this.props;
    const path = `/postDetail/${post.postId}`;
    return (
      <Card className={styles.postInfo}>
        <Meta
          description={
            <div>
              <div className={styles.postTitle}>
                <Link className={styles.postTitleA} to={path}>
                  {post.title}
                </Link>
                <div className={styles.postTitleCreateTime}>
                  <IconText type="calendar" text={moment(post.createTime).format('YYYY-MM-DD')} />
                </div>
              </div>
              <div className={styles.postTitleTags}>
                <IconText type="read-o" text={<Tag text={post.readTimes} href="#" />} />
                <IconText type="like-o" text={<Tag text={post.likedTimes} href="#" />} />
              </div>
            </div>
          }
        />
        {content}
      </Card>
    );
  }
}

export default PostTitle;
