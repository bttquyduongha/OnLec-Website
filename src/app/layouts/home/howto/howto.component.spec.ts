import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoComponent } from './howto.component';

describe('HowtoComponent', () => {
  let component: HowtoComponent;
  let fixture: ComponentFixture<HowtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowtoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
