import { Component, OnInit, HostListener } from '@angular/core';
import { Employee } from 'src/app/employee-interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {
  statusAddEmployee: boolean = false
  employees: Employee[] = []
  selectedEmployee: Employee[] = []


  constructor(private employeeSerive: EmployeesService) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize ():void {
    this.employeeSerive.getEmployees().subscribe((employee) => this.employees = employee)
  }

  addEmployeeBtn () {
    this.statusAddEmployee = !this.statusAddEmployee
  }

  addEmployee (event: any) {
    this.employeeSerive.addEmployees(event[0]).subscribe(() => this.employees.push(event[0]))
    this.addEmployeeBtn()
  }

  addeditEmployee ( employee:Employee ) {
    if(this.selectedEmployee.includes(employee)){
      this.selectedEmployee = this.selectedEmployee.filter(e => {
        return e.id != employee.id
      })
      return
    }
    console.log(this.selectedEmployee)
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
    this.employeeSerive.deleteEmployees(employee).subscribe(() => (this.employees = this.employees.filter(e => e.id != employee.id)))
  }


}
