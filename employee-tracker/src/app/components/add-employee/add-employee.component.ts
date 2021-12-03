import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Employee } from 'src/app/employee-interface';
import { employees } from 'src/app/mock-employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  @Output() addEmployee = new EventEmitter<Employee>()

  newEmployee?: Employee

  constructor() { }

  ngOnInit(): void {
    this.newEmployee = employees
  }

  onCLick () {
    if(this.newEmployee!.id < 1) return
    this.addEmployee.emit(this.newEmployee)
    delete this.newEmployee
  }
}
