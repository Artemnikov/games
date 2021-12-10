import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/employee-interface';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {

  @Input() selectedEmployee!: Employee[]
  @Output() editedEmployee = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  endEditEmployee () {
    this.editedEmployee.emit(this.selectedEmployee)
  }
}
