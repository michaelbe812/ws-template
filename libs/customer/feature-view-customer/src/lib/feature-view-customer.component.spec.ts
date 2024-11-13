import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureViewCustomerComponent } from './feature-view-customer.component';

describe('FeatureViewCustomerComponent', () => {
  let component: FeatureViewCustomerComponent;
  let fixture: ComponentFixture<FeatureViewCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureViewCustomerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureViewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
