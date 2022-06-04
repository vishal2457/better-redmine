import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalConstants } from './global-constants';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router, private _ls: LocalStorageService ){}


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
     let tk = this._ls.get(GlobalConstants.lsKeys.token);
     if(!tk) {
        this._router.navigate(['/auth']);
       return false
     }
     return true
  }

}
