import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new User();

  constructor(
    private routerActive: ActivatedRoute,
    private userService: UsuarioService
    ) { }

  ngOnInit(): void {
    let id = this.routerActive.snapshot.paramMap.get('id');

    if(id != null){
       // console.log('Valor sendo editado : ' + id);
       this.userService.getStudant(id).subscribe(data =>{
            this.usuario = data;
            console.log(data);
       });

    }
  }

  salvarUser(){
    //console.info(this.usuario);
    if(this.usuario.id != null && this.usuario.id.toString().trim() != null){ //atualizando ou editando
        this.userService.udpateUsuario(this.usuario).subscribe(data =>{
            this.novo(); //limpoa a tela
            console.info("User Atualizando: " + data);
        });
    }else{
        this.userService.salvarUsuario(this.usuario).subscribe(data => {//salvando novo User
        this.novo(); //limpar a tela
        console.info("Gravou user:" + data);
      });
    }
  }

  //limpa os dados apos salvar os registros
  novo(){
      this.usuario = new User();
  }

}
