import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee-interface';
import { EmployeesService } from 'src/app/services/employees.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-detail-specific',
  templateUrl: './employee-detail-specific.component.html',
  styleUrls: ['./employee-detail-specific.component.scss']
})
export class EmployeeDetailSpecificComponent implements OnInit {

  employee!: Employee
  status!: boolean

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private location: Location
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id).subscribe((employee) => this.employee = employee)
  }

  topEmployee(employee:Employee){
    employee.topEmployee = !employee.topEmployee
  }

  endEditEmployee() {
    this.employeeService.editEmployees(this.employee).subscribe(()=> console.log('employee changd'))
  }

  createMessage() {
    this.status = !this.status
  }
}
