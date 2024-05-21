import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListenerService } from '../../services/listener.service';
import { RestService } from '../../services/rest.service';
import IAlert from '../../interfaces/IAlert';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public form:FormGroup = new FormGroup({
    nickname: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.max(255),
    ])
  })

  constructor(private rest: RestService, private listener: ListenerService) {}

  onLogin() {
    this.rest.login(this.form.value).subscribe(rsp => {
      const alert: IAlert = {
        alerTitle: 'Welcome again to meowTasks',
        alertContent: rsp.msg,
        alertType: 'success'
      }

      this.listener.newAlert.emit(alert)
    }, 
    err => {
      const alert: IAlert = {
        alertContent: err.error.msg,
        alertType: 'danger'
      }

      this.listener.newAlert.emit(alert)
    })
  }
}
