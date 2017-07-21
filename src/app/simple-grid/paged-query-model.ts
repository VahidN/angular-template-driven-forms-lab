export class PagedQueryModel {
  constructor(
    public sortBy: string,
    public isAscending: boolean,
    public page: number,
    public pageSize: number
  ) {}
}
