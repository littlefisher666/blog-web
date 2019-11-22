import React, { Component } from 'react';
import { PostInfo, PostInfoState } from '@/models/post';
import { Page } from '@/entity/page';
import { connect } from 'dva';
import { ConnectProps } from '@/models/connect';
import { List } from 'antd';
import { RouteComponentProps } from 'react-router';
import PostTitle from '@/components/PostTitle';
import { Dispatch } from 'redux';
import styles from './index.less';

interface PostListProps extends ConnectProps {
  postPage: Page<PostInfo>;
}

type PropsWithRouter = PostListProps & RouteComponentProps<{ tagId: string }>;

function getPostTagData(dispatch: Dispatch | undefined, tagCode: string) {
  if (dispatch) {
    dispatch({
      type: 'post/queryPostList',
      payload: {
        authorId: DEFAULT_AUTHOR_ID,
        tagId: tagCode,
      },
    });
  }
}

@connect(({ post }: { post: PostInfoState }) => ({
  postPage: post.postPage,
}))
class PostList extends Component<PropsWithRouter> {
  componentDidMount() {
    const { dispatch } = this.props;
    const tagCode = this.props.match.params.tagId;
    getPostTagData(dispatch, tagCode);
  }

  componentWillReceiveProps(nextProps: PropsWithRouter) {
    if (this.props.match.params.tagId !== nextProps.match.params.tagId) {
      const { dispatch } = this.props;
      const tagCode = nextProps.match.params.tagId;
      getPostTagData(dispatch, tagCode);
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
        className={styles.postListCard}
        dataSource={postPage ? postPage.content : []}
        pagination={{
          onChange: pageChange,
          pageSize: 5,
          size: 'small',
          total: postPage.totalElements,
        }}
        renderItem={item => <PostTitle post={item} content={<div />} />}
      />
    );
  }
}

export default PostList;
