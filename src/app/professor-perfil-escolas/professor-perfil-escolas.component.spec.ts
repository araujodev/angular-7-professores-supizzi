import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorPerfilEscolasComponent } from './professor-perfil-escolas.component';

describe('ProfessorPerfilEscolasComponent', () => {
  let component: ProfessorPerfilEscolasComponent;
  let fixture: ComponentFixture<ProfessorPerfilEscolasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorPerfilEscolasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorPerfilEscolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
