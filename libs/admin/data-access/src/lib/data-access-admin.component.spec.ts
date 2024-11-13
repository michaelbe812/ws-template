import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataAccessAdminComponent } from './data-access-admin.component';

describe('DataAccessAdminComponent', () => {
  let component: DataAccessAdminComponent;
  let fixture: ComponentFixture<DataAccessAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAccessAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
