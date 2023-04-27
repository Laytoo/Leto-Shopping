import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartViewwComponent } from './cart-vieww.component';

describe('CartViewwComponent', () => {
  let component: CartViewwComponent;
  let fixture: ComponentFixture<CartViewwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartViewwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartViewwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
