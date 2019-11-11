import React, { Component } from 'react';
import { PostInfo, PostInfoState } from '@/models/post';
import { Page } from '@/entity/page';
import { connect } from 'dva';
import { ConnectProps } from '@/models/connect';
import { List } from 'antd';
import SimplePostInfo from '@/components/SimplePostInfo';
import styles from './index.less';

interface PostListProps extends ConnectProps {
  postPage: Page<PostInfo>;
}

@connect(({ post }: { post: PostInfoState }) => ({
  postPage: post.postPage,
}))
class PostList extends Component<PostListProps> {
  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: 'post/queryPostList',
        payload: {
          authorId: DEFAULT_AUTHOR_ID,
        },
      });
    }
  }

  render() {
    const { postPage, dispatch } = this.props;
    const pageChange = (page: number, pageSize?: number): void => {
      if (dispatch) {
        dispatch({
          type: 'post/queryPostList',
          payload: {
            authorId: DEFAULT_AUTHOR_ID,
            pageNum: page - 1,
            size: pageSize,
          },
        });
      }
    };
    return (
      <List<PostInfo>
        className={styles.postList}
        dataSource={postPage ? postPage.content : []}
        pagination={{
          onChange: pageChange,
          pageSize: 5,
          size: 'small',
          total: postPage.totalElements,
        }}
        renderItem={item => <SimplePostInfo post={item} />}
      />
    );
  }
}

export default PostList;
