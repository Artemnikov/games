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
  selectedEmployee: Employee[] = []

  addEmployeeFlag : boolean = false

  constructor(private employeeSerive: EmployeesService) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize ():void {
    this.employeeSerive.getEmployees().subscribe((employee) => this.employees = employee)
  }

  addEmployeeBtn (state: boolean) {
    this.addEmployeeFlag = state
  }

  addEmployee (event:any) {
    this.employeeSerive.addEmployees(event).subscribe(() => this.employees.push(event))
    this.addEmployeeBtn (false)
  }

  addeditEmployee ( employee:Employee ) {
    this.selectedEmployee!.push(employee)
  }

  editEmployee (event: Employee []) {
    console.log(event[0])
    event.forEach(employee => {
      this.employeeSerive.editEmployees(employee).subscribe(() => console.log('success'))
    })
    this.selectedEmployee = []
  }

  DeleteEmployee ( employee:Employee ) {
    this.employeeSerive.deleteEmployees(employee).subscribe(() => (this.employees = this.employees.filter(t => t.id !== employee.id)))
  }

}
