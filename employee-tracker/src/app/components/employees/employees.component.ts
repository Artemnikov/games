import { Component, OnInit, HostListener } from '@angular/core';
import { Employee } from 'src/app/employee-interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  title = 'Employee Tracker';
  employees: Employee[] = []

  selectedEmployee?: Employee

  editEmployee ( employee:Employee ) {
    this.selectedEmployee = employee
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if(event.key == 'Escape')
      delete this.selectedEmployee
  }

  DeleteEmployee ( employee:Employee ) {

  }

  constructor(private employeeSerive: EmployeesService) { }

  ngOnInit(): void {
    this.employeeSerive.getEmployees().subscribe((employee) => this.employees = employee)
  }

}