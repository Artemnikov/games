import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee-interface';
import { EmployeesService } from 'src/app/services/employees.service';
import { Location } from '@angular/common';
import { employees } from 'src/app/mock-employee';
import { SendEmailMessageService } from 'src/app/services/send-email-message.service';
import { Email } from 'src/app/email-interface';

@Component({
  selector: 'app-employee-detail-specific',
  templateUrl: './employee-detail-specific.component.html',
  styleUrls: ['./employee-detail-specific.component.scss']
})
export class EmployeeDetailSpecificComponent implements OnInit {

  employee: Employee = employees
  emails: Email[] = []
  status!: boolean

  constructor(
    private emailService: SendEmailMessageService,
    private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private location: Location
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id).subscribe((employee) => this.employee = employee)
    this.emailService.getEmail(id).subscribe((mail) => {
      mail.forEach((item)=> {
        if(item.idn == id) this.emails.push(item)
      })
    })
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
