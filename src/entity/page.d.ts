export interface Page<T> {
  /** 总页数 */
  totalPages?: number;
  /** 总记录数 */
  totalElements?: number;
  /** 是否第一页 */
  first?: boolean;
  /** 是否最后一页 */
  last?: boolean;
  numberOfElements?: number;
  size?: number;
  number?: number;
  empty?: boolean;
  content?: T[];
}
