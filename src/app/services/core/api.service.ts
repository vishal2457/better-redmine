import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient ) { }

  private makeURL(endpoint: string) {
    return `${environment.apiHost}${endpoint}`
  }

  get({endpoint, queryParams}: {endpoint: string, queryParams?: any}) {
    return this._http.get(this.makeURL(endpoint), {params: queryParams})
  }

  delete({endpoint, queryParams}: {endpoint: string, queryParams?: any}) {
    return this._http.delete(this.makeURL(endpoint), {params: queryParams})
  }

  post({endpoint, body}: {endpoint: string, body?: any}) {
    return this._http.post(this.makeURL(endpoint), body)
  }

  put({endpoint, body}: {endpoint: string, body?: any}) {
    return this._http.put(this.makeURL(endpoint), body)
  }

}
