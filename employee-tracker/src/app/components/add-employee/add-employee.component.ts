import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Employee } from 'src/app/employee-interface';
import { employees } from 'src/app/mock-employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})

export class AddEmployeeComponent implements OnInit {

  @Output() addEmployee = new EventEmitter<Employee>()
  newEmployee: Employee = {
    id: 0,
    fname: '',
    lname: '',
    dateofbirth: '',
    salary: 0,
    email: '',
    topEmployee: false
  }

  constructor() { }

  ngOnInit(): void {
    console.log('aa')
  }

  onCLick () {
    if(this.newEmployee.id == 0) return
    console.log('1')
    this.addEmployee.emit(this.newEmployee)
  }
}
