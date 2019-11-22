import { Effect } from 'dva';
import { Reducer } from 'redux';
import { fetchCurrentAuthor } from '@/services/author';
import { TagType } from '@/entity/tag';
import getResponse from '@/utils/response';

/** 城市信息 */
export interface CityInfo {
  /** 城市名 */
  name: string;
  /** 城市编码 */
  code?: string;
  /** 省份 */
  province: {
    /** 省份名 */
    name: string;
    /** 省份编码 */
    code?: string;
  };
}

/** 作者 */
export interface CurrentAuthor {
  /** 作者id */
  authorId?: number;
  /** 名称 */
  name?: string;
  /** 头像 */
  avatar?: string;
  /** 邮箱 */
  email?: string;
  /** 签名 */
  signature?: string;
  /** 职位 */
  job?: string;
  /** 团队 */
  group?: string;
  /** 作者标签 */
  authorTags?: TagType[];
  /** 博文标签 */
  postTags: TagType[];
  /** 城市 */
  city: CityInfo;
  /** 详细地址 */
  address?: string;
  /** 手机号 */
  phone?: string;
}

export interface AuthorModelState {
  currentAuthor?: Partial<CurrentAuthor>;
}

export interface AuthorModelType {
  namespace: 'author';
  state: AuthorModelState;
  effects: {
    fetchCurrentAuthor: Effect;
  };
  reducers: {
    saveCurrentAuthor: Reducer<AuthorModelState>;
  };
}

const AuthorModel: AuthorModelType = {
  namespace: 'author',

  state: {
    currentAuthor: {},
  },
  effects: {
    *fetchCurrentAuthor(_, { call, put }) {
      const response = yield call(fetchCurrentAuthor);
      yield put({
        type: 'saveCurrentAuthor',
        payload: getResponse(response),
      });
    },
  },
  reducers: {
    saveCurrentAuthor(state, action) {
      return {
        ...(state as AuthorModelState),
        currentAuthor: action.payload || {},
      };
    },
  },
};

export default AuthorModel;
