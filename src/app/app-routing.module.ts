import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { AuthGuard } from "./_guards";
import { ProfessorPerfilIndexComponent } from "./professor-perfil-index";
import { AvisosIndexComponent } from "./avisos-index";
import { ProfessorPerfilEditComponent } from "./professor-perfil-edit/professor-perfil-edit.component";
import { ProfessorPerfilPlanoComponent } from '@/professor-perfil-plano';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "professor-perfil",
    component: ProfessorPerfilIndexComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "professor-atualizar",
    component: ProfessorPerfilEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "professor-plano",
    component: ProfessorPerfilPlanoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "avisos",
    component: AvisosIndexComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
