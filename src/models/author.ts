import { Effect } from 'dva';
import { Reducer } from 'redux';

export interface CurrentAuthor {
  /** 头像 */
  avatar?: string;
  /** 名称 */
  name?: string;
  /** 座右铭 */
  motto?: string;
  /** 所在公司 */
  // company?: string;
  // /**  */
  // signature?: string;
  // /**  */
  // tags?: {
  //   key: string;
  //   label: string;
  // }[];
  // /**  */
  // unreadCount?: number;
}

export interface AuthorModelState {
  currentAuthor?: CurrentAuthor;
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
    * fetchCurrentAuthor(_, { call, put }) {
      const response = yield call();
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
