import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorDesafiosIndexComponent } from './professor-desafios-index.component';

describe('ProfessorDesafiosIndexComponent', () => {
  let component: ProfessorDesafiosIndexComponent;
  let fixture: ComponentFixture<ProfessorDesafiosIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorDesafiosIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorDesafiosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
