import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Employee } from '../employee-interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiurl = 'http://localhost:5000/employees'
  private messageurl = 'http://localhost:5000/messages'

  constructor(private http: HttpClient) { }

  getEmployees (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiurl)
  }

  getEmployee (id: number): Observable<Employee> {
    const api = `${this.apiurl}/${id}`
    return this.http.get<Employee>(api)
  }

  deleteEmployees (employee:Employee): Observable<Employee> {
    const url = `${this.apiurl}/${employee.id}`
    return this.http.delete<Employee>(url)
  }

  addEmployees (employee:Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiurl,employee)
  }

  editEmployees (employee:Employee) {
    const url = `${this.apiurl}/${employee.id}`
    return this.http.put(url, {
      "id": employee.id,
      "fname": employee.fname,
      "lname": employee.lname,
      "dateofbirth": employee.dateofbirth,
      "salary": employee.salary,
      "email": employee.email,
      "topEmployee": employee.topEmployee
    })}
}
