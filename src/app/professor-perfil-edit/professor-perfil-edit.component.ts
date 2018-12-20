import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-professor-perfil-edit",
  templateUrl: "./professor-perfil-edit.component.html",
  styleUrls: ["./professor-perfil-edit.component.css"]
})
export class ProfessorPerfilEditComponent implements OnInit {
  professorPerfilEditForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}
}
