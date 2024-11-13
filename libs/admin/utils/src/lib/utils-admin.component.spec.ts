import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilsAdminComponent } from './utils-admin.component';

describe('UtilsAdminComponent', () => {
  let component: UtilsAdminComponent;
  let fixture: ComponentFixture<UtilsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilsAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UtilsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
