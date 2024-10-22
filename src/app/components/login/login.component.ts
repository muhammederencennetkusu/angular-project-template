import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { loginModel } from '../../models/login.model';
import { HttpServiceService } from '../../services/http.service.service';
import { Router } from '@angular/router';
import { LoginResponseModel } from '../../models/login.response.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model : loginModel = new loginModel();


  constructor(
    private http : HttpServiceService,
    private route : Router
  ){

  }


  signIn(){
    this.http.post<LoginResponseModel>("Auth/Login",this.model,(res)=>{
      localStorage.setItem("token",res.token);
      this.route.navigateByUrl("/");
    })
  }
}
