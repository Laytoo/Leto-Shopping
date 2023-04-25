import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { env } from 'process';

export const SkipInterceptor='X-Skip-Interceptor';
export const WriteObject='X-Write-Object';
@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.headers.has(SkipInterceptor)){
      const headers=request.headers.delete(SkipInterceptor);
      return next.handle(request.clone({headers}));
    }
    if(request.headers.has(WriteObject)){
      const headers=request.headers.delete(WriteObject);
      const updatedRequest=request.clone({
        setParams:{
          consumer_key:environment.writekeys.consumer_key,
          consumer_secret:environment.writekeys.consumer_secret,
        },
        headers
      });
      return next.handle(updatedRequest);
    }

    const modifiedRequest=request.clone({
      setParams:{
        consumer_key:environment.readonlykeys.consumer_key,
        consumer_secret:environment.readonlykeys.consumer_secret,
      }
    });

    return next.handle(modifiedRequest);

  }
}
