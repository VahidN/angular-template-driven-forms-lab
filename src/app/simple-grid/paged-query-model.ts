export interface PagedQueryModel {
  sortBy: string;
  isAscending: boolean;
  page: number;
  pageSize: number;
  filterByColumn: string;
  filterByValue: string;
}
