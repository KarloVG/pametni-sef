export interface IPaginationBase {
  page: number;
  pageSize: number;
  orderBy?: IOrderBy;
  filtering?: any;
  searchString?: string;
}

interface IOrderBy {
  prop: string;
  dir: string;
}
