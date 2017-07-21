export class PagedQueryResult<T> {
  constructor(public totalItems: number, public items: T[]) {}
}
