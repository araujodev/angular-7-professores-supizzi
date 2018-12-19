import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { AuthGuard } from "./_guards";
import { ProfessorPerfilIndexComponent } from "./professor-perfil-index";
import { AvisosIndexComponent } from "./avisos-index";

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
