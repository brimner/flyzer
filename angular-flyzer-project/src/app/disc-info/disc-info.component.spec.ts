import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscInfoComponent } from './disc-info.component';

describe('DiscInfoComponent', () => {
  let component: DiscInfoComponent;
  let fixture: ComponentFixture<DiscInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
