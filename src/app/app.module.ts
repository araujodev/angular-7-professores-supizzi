import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";

import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { LayoutMenuProfessorComponent } from "./layout-menu-professor/layout-menu-professor.component";
import { ProfessorPerfilIndexComponent } from './professor-perfil-index/professor-perfil-index.component';
import { AvisosIndexComponent } from './avisos-index/avisos-index.component';
import { LayoutMenuPerfilComponent } from './layout-menu-perfil/layout-menu-perfil.component';
import { ProfessorPerfilEditComponent } from './professor-perfil-edit/professor-perfil-edit.component';
import { ProfessorPerfilPlanoComponent } from './professor-perfil-plano/professor-perfil-plano.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutMenuProfessorComponent,
    ProfessorPerfilIndexComponent,
    AvisosIndexComponent,
    LayoutMenuPerfilComponent,
    ProfessorPerfilEditComponent,
    ProfessorPerfilPlanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
