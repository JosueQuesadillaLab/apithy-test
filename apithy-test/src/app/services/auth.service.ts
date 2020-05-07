import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  loginUser( email : string , password : string){
    console.log(email,password);
    console.log("Login desde Servicio");
  }

}
