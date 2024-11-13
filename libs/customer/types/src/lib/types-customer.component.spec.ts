import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypesCustomerComponent } from './types-customer.component';

describe('TypesCustomerComponent', () => {
  let component: TypesCustomerComponent;
  let fixture: ComponentFixture<TypesCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesCustomerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypesCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
