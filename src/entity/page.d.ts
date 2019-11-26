export interface Page<T> {
  /** 具体分页内容 */
  list?: T[];
  /** 当前页 */
  pageNum: number;
  /** 每页的数量 */
  pageSize: number;
  /** 当前页的数量 */
  size: number;
  /** 当前页面第一个元素在数据库中的行号 */
  startRow: number;
  /** 当前页面最后一个元素在数据库中的行号 */
  endRow: number;
  /** 总记录数 */
  total: number;
  /** 总页数 */
  pages: number;
  /** 前一页 */
  prePage: number;
  /** 下一页 */
  nextPage: number;
  /** 是否为第一页 */
  isFirstPage: boolean;
  /** 是否为最后一页 */
  isLastPage: boolean;
  /** 是否有前一页 */
  hasPreviousPage: boolean;
  /** 是否有下一页 */
  hasNextPage: boolean;
  /** 导航页码数 */
  navigatePages: number;
  /** 所有导航页号 */
  navigatePageNums: number[];
  /** 导航条上的第一页 */
  navigateFirstPage: number;
  /** 导航条上的最后一页 */
  navigateLastPage: number;
}
