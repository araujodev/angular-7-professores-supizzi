import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorPerfilEditComponent } from './professor-perfil-edit.component';

describe('ProfessorPerfilEditComponent', () => {
  let component: ProfessorPerfilEditComponent;
  let fixture: ComponentFixture<ProfessorPerfilEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorPerfilEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorPerfilEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
