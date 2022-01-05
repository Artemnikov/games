import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, of, pipe, tap } from 'rxjs';

import { Employee } from '../employee-interface';
import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiurl = 'http://localhost:5000/employees'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  // get the specific employee we want to delete
  // delete it

  addEmployees (employee:Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiurl,employee)
  }

  editEmployees ( employee: Employee ) {
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
