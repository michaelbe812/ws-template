import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypesAdminComponent } from './types-admin.component';

describe('TypesAdminComponent', () => {
  let component: TypesAdminComponent;
  let fixture: ComponentFixture<TypesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
