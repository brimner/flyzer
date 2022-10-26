import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscDisplayComponent } from './disc-display.component';

describe('DiscDisplayComponent', () => {
  let component: DiscDisplayComponent;
  let fixture: ComponentFixture<DiscDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
