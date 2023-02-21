import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-root',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  //students : Observable<User[] >;
  students : User[] ;

  nome: String;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
     //METODO QUE CARREGA A LISTA AO ABRIR A TELA
    this.usuarioService.getStudentList().subscribe(data => {
      this.students = data;
      console.log(this.students);
    });
  }
  //DELETANDO USUÁRIO
  deleteUsuario(id: Number){
      this.usuarioService.deletarUsuario(id).subscribe(data =>{
         console.log("Retorno do método delete : " + data);
         //METODO QUE CARREGA A LISTA
         this.usuarioService.getStudentList().subscribe(data => {
          this.students = data;
          console.log(this.students);
        });
      });
  }
  //CONSULTAR USUÁRIO
  consultarUsuario(){
    this.usuarioService.consultarUsuario(this.nome).subscribe( data =>{
        this.students = data;

    });
  }



}
