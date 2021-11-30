import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../employee-interface';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiurl = 'http://localhost:5000/employees'

  constructor(private http: HttpClient) { }

  getEmployees (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiurl)
  }

  deleteEmployees (employee:Employee): Observable<Employee> {
    const url = `${this.apiurl}/${employee.id}`
    return this.http.delete<Employee>(url)
  }



  createEmployees (employee:Employee): Observable<Employee> {
    const url = `${this.apiurl}/${employee.id}`
    return this.http.post<Employee>(url, {
      JSON : {
          "id": employee.id,
          "fname": employee.fname,
          "lname": employee.lname,
          "dateofbirth": employee.dateofbirth,
          "salary": employee.salary,
          "email": employee.email,
        }
    } )
  }

  addEmployees (employee:Employee): Observable<Employee> {
    const url = `${this.apiurl}/${employee.id}`
    return this.http.delete<Employee>(url)
  }
}
