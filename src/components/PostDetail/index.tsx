import React, { Component } from 'react';
import { Post, PostInfoState } from '@/models/post';
import { connect } from 'dva';
import { ConnectProps } from '@/models/connect';
import { RouteComponentProps } from 'react-router';
import PostTitle from '@/components/PostTitle';
import Markdown from '@/components/Markdown';

interface PostDetailProps extends ConnectProps {
  post: Post;
}

type PropsWithRouter = PostDetailProps & RouteComponentProps<{ postId: string }>;

@connect(({ post }: { post: PostInfoState }) => ({
  post: post.post,
}))
class PostDetail extends Component<PropsWithRouter> {
  componentDidMount() {
    const { dispatch } = this.props;
    const id = this.props.match.params.postId;
    if (dispatch) {
      dispatch({
        type: 'post/queryPostDetail',
        payload: {
          postId: id,
        },
      });
      dispatch({
        type: 'post/read',
        payload: {
          postId: id,
        },
      });
    }
  }

  render() {
    const { post } = this.props;
    const loading = post == null;
    return loading ? (
      <div />
    ) : (
      <PostTitle post={post} content={<Markdown source={post.content} />} />
    );
  }
}

export default PostDetail;
