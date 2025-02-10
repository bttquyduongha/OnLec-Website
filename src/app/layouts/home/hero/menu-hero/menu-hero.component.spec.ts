import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHeroComponent } from './menu-hero.component';

describe('MenuHeroComponent', () => {
  let component: MenuHeroComponent;
  let fixture: ComponentFixture<MenuHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
