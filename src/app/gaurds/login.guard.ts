import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private routerNavigate: Router
  ) {}
  canActivate(): any {
    if (this.authService.isAuthenticate()) {
      alert("reaching activate login guards");
      this.routerNavigate.navigate(["agentdashboard"]);
      return false;
    }
    return true;
  }
  }