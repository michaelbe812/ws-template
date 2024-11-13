import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureManageCustomerComponent } from './feature-manage-customer.component';

describe('FeatureManageCustomerComponent', () => {
  let component: FeatureManageCustomerComponent;
  let fixture: ComponentFixture<FeatureManageCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureManageCustomerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureManageCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
