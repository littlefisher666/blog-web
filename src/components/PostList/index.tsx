import React, { Component } from 'react';
import { PostInfo, PostInfoState } from '@/models/post';
import { Page } from '@/entity/page';
import { connect } from 'dva';
import { ConnectProps } from '@/models/connect';
import { List } from 'antd';
import SimplePostInfo from '@/components/SimplePostInfo';

interface PostListProps extends ConnectProps {
  page: Page<PostInfo>;
}

@connect(({ post }: { post: PostInfoState }) => ({
  page: post.postPage,
}))
class PostList extends Component<PostListProps> {
  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: 'post/queryPostList',
        payload: {
          authorId: DEFAULT_AUTHOR_ID,
          pageNum: 0,
          size: 5,
        },
      });
    }
  }

  render() {
    const { page } = this.props;
    return (
      <List<PostInfo>
        dataSource={page ? page.content : []}
        renderItem={item => <SimplePostInfo post={item} />}
      />
    );
  }
}

export default PostList;
