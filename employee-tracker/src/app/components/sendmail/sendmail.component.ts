import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Email } from 'src/app/email-interface';
import { Employee } from 'src/app/employee-interface';
import { SendEmailMessageService } from 'src/app/services/send-email-message.service';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.scss']
})

export class SendmailComponent implements OnInit {

  @Input() employee!: Employee
  @Output() endEmail = new EventEmitter
  email: Email = {
    idn: 0,
    to: '',
    cc: '',
    subject: '',
    message: ''
  }

  constructor(private sendService: SendEmailMessageService) { }

  ngOnInit(): void {
  }

  sendEmail() {
    this.email.idn = this.employee.id
    this.email.to = `${this.employee.fname} ${this.employee.lname}`
    if ( !this.email.message ) return
    console.log(this.email)
    this.sendService.saveEmail(this.email).subscribe(() => this.endEmail.emit())
  }


}
