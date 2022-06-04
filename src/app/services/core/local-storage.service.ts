import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  get(key:string) {
    let data = localStorage.getItem(key);
    if(data) {
      return JSON.parse(data)
    }
    return data;
  }
}
