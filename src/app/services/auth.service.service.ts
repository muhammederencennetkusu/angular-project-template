import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtPayload, jwtDecode } from "jwt-decode";
import { userModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  token: string = "";
  user:userModel = new userModel();

  constructor(
    private router:Router
  ) { }



  isAuthenticated(){

    this.token = localStorage.getItem("token") ?? "";
    if(this.token ===""){
      this.router.navigateByUrl("/login");
      return false;
    }
    const decoded : JwtPayload | any = jwtDecode(this.token);
    const exp  = decoded.exp;
    const now = new Date().getTime()/1000;



    if(now>exp){
        this.router.navigateByUrl("/login");
        return false;
    }


    this.user.Id = decoded["Id"];
    this.user.name = decoded["Name"];
    this.user.email = decoded["Email"];
    this.user.userName = decoded["userName"];


    return true;

  }
}
