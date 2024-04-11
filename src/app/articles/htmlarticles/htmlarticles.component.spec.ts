import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlarticlesComponent } from './htmlarticles.component';

describe('HtmlarticlesComponent', () => {
  let component: HtmlarticlesComponent;
  let fixture: ComponentFixture<HtmlarticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlarticlesComponent]
    });
    fixture = TestBed.createComponent(HtmlarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
