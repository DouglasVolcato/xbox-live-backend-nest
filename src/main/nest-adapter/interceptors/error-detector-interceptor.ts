import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ErrorDetectorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((data) => {
        if (data.statusCode === 400) {
          throw new HttpException(data.body.name, 400);
        } else if (data.statusCode === 401) {
          throw new HttpException(data.body.name, 401);
        } else if (data.statusCode === 404) {
          throw new HttpException(data.body.name ?? 'Not found', 404);
        }
      }),
    );
  }
}
