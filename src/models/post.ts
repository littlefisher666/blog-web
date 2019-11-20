import { Effect } from 'dva';
import { Reducer } from 'redux';
import { queryPostDetail, queryPostList } from '@/services/post';
import { TagType } from '@/entity/tag';
import { Page } from '@/entity/page';

export interface PostInfo {
  /** 博文id */
  postId: number;
  /** 博文标题 */
  title: string;
  /** 博文预览 */
  previewContent: string;
  /** 作者id */
  authorId: number;
  /** 作者名称 */
  authorName: string;
  /** 标签 */
  tagList: TagType[];
  /** 阅读数 */
  readTimes: number;
  /** 点赞数 */
  likedTimes: number;
  /** 创建时间 */
  createTime: string;
}

export interface Post extends PostInfo {
  /** 博文id */
  postId: number;
  /** 博文 */
  content: string;
}

export interface PostInfoState {
  postPage?: Partial<Page<PostInfo>>;
  post?: Post;
}

export interface PostModel {
  namespace: 'post';
  state: PostInfoState;
  effects: {
    queryPostList: Effect;
    queryPostDetail: Effect;
  };
  reducers: {
    savePost: Reducer<PostInfoState>;
    savePostDetail: Reducer<PostInfoState>;
  };
}

const PostModel: PostModel = {
  namespace: 'post',

  state: {
    postPage: {},
  },
  effects: {
    *queryPostList({ payload }, { call, put }) {
      const response = yield call(
        queryPostList,
        payload.authorId,
        payload.pageNum || 0,
        payload.size || 5,
      );
      yield put({
        type: 'savePost',
        payload: response.data,
      });
    },
    *queryPostDetail({ payload }, { call, put }) {
      const response = yield call(queryPostDetail, payload.postId);
      yield put({
        type: 'savePostDetail',
        payload: response.data,
      });
    },
  },
  reducers: {
    savePost(state, action) {
      return {
        ...(state as PostInfoState),
        postPage: action.payload || {},
      };
    },
    savePostDetail(state, action) {
      return {
        ...(state as PostInfoState),
        post: action.payload || {},
      };
    },
  },
};

export default PostModel;
