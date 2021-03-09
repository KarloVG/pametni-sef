export interface IPaginatedResponse<TEntry> {
  count: number;
  data: TEntry;
  pageCount: number;
}
