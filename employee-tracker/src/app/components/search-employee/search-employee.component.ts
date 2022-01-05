import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap } from 'rxjs';
import { Employee } from 'src/app/employee-interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})

export class SearchEmployeeComponent implements OnInit {

  employees: Employee[] = []
  foundEmployee: Employee[] =[]
  name: string = ''

  constructor ( private employeeService: EmployeesService ) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employee) => this.employees = employee)
  }

  search() {
    if(this.name === '')
      this.foundEmployee = []
    else {
      this.foundEmployee = this.employees.filter(res =>{
        return res.fname.toLowerCase().match(this.name.toLowerCase())
      })
    }
  }

}
