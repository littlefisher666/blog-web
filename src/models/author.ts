import { Effect } from 'dva';
import { Reducer } from 'redux';
import { fetchCurrentAuthor } from '@/services/author';

/** 标签 */
export interface TagType {
  /** 标签名 */
  name: string;
  /** 标签编码 */
  code?: string;
}

/** 坐标信息 */
export interface GeographicType {
  /** 省份 */
  province: {
    /** 省份名 */
    name: string;
    /** 省份编码 */
    code?: string;
  };
  /** 城市 */
  city: {
    /** 城市名 */
    name: string;
    /** 城市编码 */
    code?: string;
  };
}

/** 作者 */
export interface CurrentAuthor {
  /** 名称 */
  name: string;
  /** 头像 */
  avatar: string;
  /** 邮箱 */
  email: string;
  /** 签名 */
  signature: string;
  /** 职位 */
  job: string;
  /** 团队 */
  group: string;
  /** 标签 */
  tags: TagType[];
  /** 坐标 */
  geographic: GeographicType;
  /** 详细地址 */
  address: string;
  /** 手机号 */
  phone: string;
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
        payload: response,
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
