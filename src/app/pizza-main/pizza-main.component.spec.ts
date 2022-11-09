import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMainComponent } from './pizza-main.component';

describe('PizzaMainComponent', () => {
  let component: PizzaMainComponent;
  let fixture: ComponentFixture<PizzaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
