import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorPerfilIndexComponent } from './professor-perfil-index.component';

describe('ProfessorPerfilIndexComponent', () => {
  let component: ProfessorPerfilIndexComponent;
  let fixture: ComponentFixture<ProfessorPerfilIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorPerfilIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorPerfilIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
