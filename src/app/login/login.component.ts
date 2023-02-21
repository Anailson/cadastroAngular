import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginServiceService } from '../Service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {login: '', senha:''};

  constructor(
    private loginService: LoginServiceService,
    private router: Router
    ){}

  public login(){

      this.loginService.login(this.usuario);
      //pegando o login e senha
      // console.log("Teste Login:" + this.usuario.login + " senha: " + this.usuario.senha);
  }

  ngOnInit(): void {//ao logar informar os dados. Joga para a tela interna
    if(localStorage.getItem('token') !== null && localStorage.getItem('token')?.toString().trim()!== null){
        this.router.navigate(['home']);
    }
  }

}
