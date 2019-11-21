import React, { PureComponent, ReactNode } from 'react';
import { PostInfo } from '@/models/post';
import { Card, List } from 'antd';
import Meta from 'antd/lib/card/Meta';
import moment from 'moment';
import IconText from '@/components/IconText';
import Tag from '@/components/Tag';
import { Link } from 'umi';
import styles from './index.less';
import { TagType } from '@/entity/tag';

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
                <IconText
                  type="crown"
                  text={
                    <List<TagType>
                      dataSource={post.tagList}
                      className={styles.tagList}
                      renderItem={tag => <Tag text={tag.name} tagId={Number(tag.code)} />}
                    />
                  }
                />
                <IconText type="read" text={<Tag text={post.readTimes} />} />
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
