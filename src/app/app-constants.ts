import { LoginServiceService } from './Service/login-service.service';


export class AppConstants {

     //MÉTODO QUE RETORNA O LOCAL DA API
     public static get baseServidor(): string {return "http://localhost:8080/"}

     //URL de login
     public static get baseLogin(): string {return this.baseServidor + "cursospringrestapi/login"}

     //Acessar os métodos da APIs
     public static get baseUrl(): string {return this.baseServidor + "cursospringrestapi/usuario/"}

}
