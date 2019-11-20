import React, { Component } from 'react';
import { Post, PostInfoState } from '@/models/post';
import { connect } from 'dva';
import { ConnectProps } from '@/models/connect';
import { RouteComponentProps } from 'react-router';
import PostTitle from '@/components/PostTitle';
import Markdown from '@/components/Markdown';

interface PostDetailProps extends ConnectProps {
  postDetail: Post;
}

type PropsWithRouter = PostDetailProps & RouteComponentProps;

@connect(({ post }: { post: PostInfoState }) => ({
  postDetail: post.post,
}))
class PostDetail extends Component<PropsWithRouter> {
  componentDidMount() {
    const { dispatch } = this.props;
    const data = this.props.location.state;
    if (dispatch) {
      dispatch({
        type: 'post/queryPostDetail',
        payload: {
          postId: data.postId,
        },
      });
    }
  }

  render() {
    const { postDetail } = this.props;
    const data = this.props.location.state;
    const loading = postDetail == null || data == null;
    return loading ? (
      <div />
    ) : (
      <PostTitle post={data} content={<Markdown source={postDetail.content} />} />
    );
  }
}

export default PostDetail;
