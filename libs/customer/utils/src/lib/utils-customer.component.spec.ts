import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilsCustomerComponent } from './utils-customer.component';

describe('UtilsCustomerComponent', () => {
  let component: UtilsCustomerComponent;
  let fixture: ComponentFixture<UtilsCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilsCustomerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UtilsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
