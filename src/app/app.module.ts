//import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioAddComponent } from './componente/usuario-add/usuario-add.component';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './Service/header-interceptor.service';


/*DECLARANDO AS ROTAS */
export const appRouters: Routes = [
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: '', component: LoginComponent}, //acessando a raiz do projeto vai para o login
      {path: 'usuarioList', component: UsuarioComponent},
      {path: 'usuarioAdd', component: UsuarioAddComponent},
      {path: 'usuarioAdd/:id', component: UsuarioAddComponent},
];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
