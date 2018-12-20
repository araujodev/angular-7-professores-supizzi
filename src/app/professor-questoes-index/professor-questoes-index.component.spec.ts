import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorQuestoesIndexComponent } from './professor-questoes-index.component';

describe('ProfessorQuestoesIndexComponent', () => {
  let component: ProfessorQuestoesIndexComponent;
  let fixture: ComponentFixture<ProfessorQuestoesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorQuestoesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorQuestoesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
