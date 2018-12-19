import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LayoutMenuProfessorComponent } from "./layout-menu-professor.component";

describe("LayoutMenuProfessorComponent", () => {
  let component: LayoutMenuProfessorComponent;
  let fixture: ComponentFixture<LayoutMenuProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutMenuProfessorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMenuProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
