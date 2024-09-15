import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form.component';

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Import FormsModule if using ngModel
      declarations: [EmployeeFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind name and role fields', () => {
   // component.newEmployee = { name: 'John Doe', role: 'Developer' };
    fixture.detectChanges();

    const nameInput = fixture.nativeElement.querySelector('#name');
    const roleInput = fixture.nativeElement.querySelector('#role');

    expect(nameInput.value).toBe('John Doe');
    expect(roleInput.value).toBe('Developer');
  });
});