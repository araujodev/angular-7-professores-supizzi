import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorPerfilPlanoComponent } from './professor-perfil-plano.component';

describe('ProfessorPerfilPlanoComponent', () => {
  let component: ProfessorPerfilPlanoComponent;
  let fixture: ComponentFixture<ProfessorPerfilPlanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorPerfilPlanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorPerfilPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
