import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavlinksComponent } from './footer-navlinks.component';

describe('FooterNavlinksComponent', () => {
  let component: FooterNavlinksComponent;
  let fixture: ComponentFixture<FooterNavlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterNavlinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNavlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
