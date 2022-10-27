import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBagComponent } from './my-bag.component';

describe('MyBagComponent', () => {
  let component: MyBagComponent;
  let fixture: ComponentFixture<MyBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
