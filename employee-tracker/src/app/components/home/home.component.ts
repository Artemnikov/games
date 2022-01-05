import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee-interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topEmployees: Employee[] = []

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employee) => {
      for(let employ of employee) {
        if( employ.topEmployee == true )
        this.topEmployees.push(employ)
      }
    })
  }

}
