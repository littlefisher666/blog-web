import { Icon, List, Tag } from 'antd';
import React, { Component } from 'react';

import { connect } from 'dva';
import styles from './index.less';
import { PostInfo, PostInfoState } from '@/models/post';
import ArticleListContent from '@/components/ArticleListContent';
import { TagType } from '@/entity/tag';

@connect(({ post }: { post: PostInfoState }) => ({
  postPage: post.postPage,
}))
class Articles extends Component<Partial<PostInfoState>> {
  render() {
    const { postPage } = this.props;
    const content = postPage == null ? [] : postPage.content;
    const IconText: React.FC<{
      type: string;
      text: React.ReactNode;
    }> = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    return (
      <List<PostInfo>
        size="large"
        className={styles.articleList}
        rowKey="id"
        itemLayout="vertical"
        dataSource={content}
        renderItem={item => (
          <List.Item
            key={item.postId}
            actions={[
              <IconText key="read" type="read-o" text={item.readTimes} />,
              /*<IconText key="star" type="star-o" text={item.readTimes}/>,*/
              <IconText key="like" type="like-o" text={item.likedTimes} />,
              /*<IconText key="message" type="message" text={item.message}/>,*/
            ]}
          >
            <List.Item.Meta
              title={<a className={styles.listItemMetaTitle} /*href={item.href}*/>{item.title}</a>}
              description={
                <span>
                  <List<TagType>
                    dataSource={item.tagList}
                    renderItem={tag => <Tag>{tag.name}</Tag>}
                  ></List>
                </span>
              }
            />
            <ArticleListContent data={item} />
          </List.Item>
        )}
      />
    );
  }
}

export default Articles;
