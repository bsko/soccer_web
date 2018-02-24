import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  readonly DEFAULT_OPTS: HttpOptions = {
    loader: true
  };

  constructor(private httpClient: HttpClient) { }

  request<T, R>(req: HttpRequest<T>, options?: HttpOptions): Observable<HttpEvent<R>> {
    return this.httpClient.request(req);
  }
}

export class HttpOptions {
  loader?: boolean;
}
