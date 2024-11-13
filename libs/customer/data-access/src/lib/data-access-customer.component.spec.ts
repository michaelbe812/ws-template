import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataAccessCustomerComponent } from './data-access-customer.component';

describe('DataAccessCustomerComponent', () => {
  let component: DataAccessCustomerComponent;
  let fixture: ComponentFixture<DataAccessCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessCustomerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAccessCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
