import { UsuarioService } from 'src/app/Service/usuario.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardiaoGuard implements CanActivate {

   constructor(private userService: UsuarioService){

   }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.info("Guardão sendo chamado!");
    return this.userService.userAutenticado();
  }

}
/**
 * Guarda as rotas na aplicaçao
 */
