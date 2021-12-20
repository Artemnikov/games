import { Component, OnInit, Input} from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

import { Message } from '../../Message-interface';
import { message } from 'src/app/mock-message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() employeeid!: number
  message: Message = message

  constructor( private employeeSerive: EmployeesService ) { }

  ngOnInit( ): void {
    this.message = { id: 0, body: '' }
  }
}
