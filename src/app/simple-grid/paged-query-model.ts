export class PagedQueryModel {
  constructor(
    public sortBy: string,
    public isAscending: boolean,
    public page: number,
    public pageSize: number,
    public filterByColumn: string,
    public filterByValue: string,
  ) { }
}
