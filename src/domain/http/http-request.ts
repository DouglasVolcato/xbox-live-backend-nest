export interface HttpRequest<T> {
  params?: { id: string };
  body?: T;
  headers?: { authorization: string };
}
