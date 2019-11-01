import { Effect } from 'dva';
import { Reducer } from 'redux';
import { queryPostList } from '@/services/post';
import { Page, TagType } from '@/models/global';

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

export interface PostInfoState {
  postPage?: Partial<Page<PostInfo>>;
}

export interface PostModel {
  namespace: 'post';
  state: PostInfoState;
  effects: {
    queryPostList: Effect;
  };
  reducers: {
    savePost: Reducer<PostInfoState>;
  };
}

const PostModel: PostModel = {
  namespace: 'post',

  state: {
    postPage: {},
  },
  effects: {
    *queryPostList({ payload }, { call, put }) {
      const response = yield call(queryPostList, payload.authorId, payload.pageNum, payload.size);
      yield put({
        type: 'savePost',
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
  },
};

export default PostModel;
