import { AppConstants } from './../app-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient ) {

   }
  // CARREGARA A LISTA DA API
   getStudentList(): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl);

   }
  //carrega os dados para edição
   getStudant(id:any): Observable<any>{
      return this.http.get<any>(AppConstants.baseUrl + id);
   }

   //DELETAR USUÁRIO
   deletarUsuario(id: Number) : Observable<any>{
      return this.http.delete(AppConstants.baseUrl + id,{responseType: 'text'});
   }

   //http://localhost:8080/cursospringrestapi/usuario/usuarioPorNome/anailson
   consultarUsuario(nome: String): Observable<any>{
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);

   }

   //salvar
    salvarUsuario(user:any) : Observable<any>{
      return this.http.post<any>(AppConstants.baseUrl, user);

    }

    //atualuza
    udpateUsuario(user:any) : Observable<any>{
      return this.http.put<any>(AppConstants.baseUrl, user);

    }
}

