import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  public user:IUser;
  constructor(private loginService:LoginService) { }
  
  ngOnInit(): void {
   this.user={username:null,accessToken:null};
  }

  login(){
    let data={username:"mnavarrete03",password:"1234"};
  this.loginService.login(data).subscribe(
      function succes(response:any){
        this.user=response.userLogedIn;
      }.bind(this),
    );
  }
}
