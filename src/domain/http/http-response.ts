export interface HttpRsponse<T> {
  statusCode: number;
  body: T;
}
