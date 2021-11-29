import { Component, OnInit, HostListener } from '@angular/core';
import { Employee } from 'src/app/employee-interface';
import { employees } from 'src/app/mock-employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  title = 'Employee Tracker';
  employees = employees

  selectedEmployee?: Employee

  editEmployee ( employee:Employee ) {
    this.selectedEmployee = employee
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    delete this.selectedEmployee
  }

  DeleteEmployee ( employee:Employee ) {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
