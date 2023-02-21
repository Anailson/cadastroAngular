import { Router } from '@angular/router';
import { LoginServiceService } from './Service/login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Curso-Angular-Rest';

  constructor (private router: Router){

  }

  ngOnInit(): void {

    if(localStorage.getItem('token') == null){//QD NÃO TEM O TOKEN
        this.router.navigate(['login']);  //CASO NÃO TENHA O TOKEN DE AUTENTICAÇÃO REDIRECIONAR PARA O LOGIN
    }

  }

  public sair(){
    localStorage.clear();//REMOVE O TOKEN
    this.router.navigate(['login']);//AO SAIR TELA DE LOGIN
  }

  public esconderBarrar(){
    if(localStorage.getItem('token') !== null && localStorage.getItem('token')?.toString().trim()!== null){
        return false;
  }else{
    return true;
  }
  }

}
