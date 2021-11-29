import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { employees } from '../mock-employee';
import { Employee } from '../employee-interface';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployees (): Observable<Employee[]> {
    const employee = of(employees)
    return employee
  }
}
