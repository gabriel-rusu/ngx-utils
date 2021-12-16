import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {CacheService} from "../cache/cache.service";
import {isNotNullOrUndefined} from "../../utils/functions.utils";


@Injectable()
export class HttpCacheService {
  private mappedRequest: Map<string, Subject<any>>;

  constructor(private http: HttpClient, private cacheService: CacheService) {
    this.mappedRequest = new Map<string, Subject<any>>();
  }

  get<T>(url: string, options: any = ''): Observable<T>|any{
    const search = url + options;
    if(this.isCached(search)) {
      return this.mappedRequest?.get(search)?.asObservable();
    }
    this.mappedRequest.set(search, new Subject());

    this.http.get<T>(url, {headers: {

      }}).subscribe(data => {
      this.mappedRequest.get(search)?.next(data);
      this.cacheService.set(search, data, true);
      this.replaceSubject(search, data);
    })
    return this.mappedRequest?.get(search)?.asObservable();
  }

  private isCached(url: string): boolean {
    if(this.mappedRequest.has(url))
      return true;
    const cachedItem = this.cacheService.get(url,true);
    if(isNotNullOrUndefined(cachedItem)){
      this.mappedRequest.set(url, new BehaviorSubject(cachedItem));
      return true;
    }
    return false;
  }

  private replaceSubject(search: string, data: any) {
    const oldSubject = this.mappedRequest.get(search);
    const observers =  oldSubject?.observers;
    const newSubject = new BehaviorSubject(data);
    if((observers))
      newSubject.observers = observers;
    this.mappedRequest.set(search, newSubject);
  }
}
