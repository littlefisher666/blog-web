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
  /** 每页数量 */
  size?: number;
  /** 当前页码，从0开始 */
  number?: number;
  /** 是否为空 */
  empty?: boolean;
  /** 具体分页内容 */
  content?: T[];
}
