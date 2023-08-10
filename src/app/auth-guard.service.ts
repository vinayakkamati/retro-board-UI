import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { RegistrationService } from "./components/registration/registration.service";

@Injectable()
export class AuthGaurd implements CanActivate{
    constructor(private authService: RegistrationService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(localStorage.getItem('user')){
            return true;
        }else{
            this.router.navigate(['']);
        }
    }
    
}