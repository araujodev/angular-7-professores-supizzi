import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMenuPerfilComponent } from './layout-menu-perfil.component';

describe('LayoutMenuPerfilComponent', () => {
  let component: LayoutMenuPerfilComponent;
  let fixture: ComponentFixture<LayoutMenuPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutMenuPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMenuPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
