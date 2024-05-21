import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListenerService } from '../../services/listener.service';
import IAlert from '../../interfaces/IAlert';

interface IUtilResponse {
  name: string;
  value: string
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  public avatars:IUtilResponse[] = [];
  public colors:IUtilResponse[] = [];
  public checkedAvatar:number = 0;
  public checkedColor:number = 0;
  public form:FormGroup = new FormGroup({
    nickname: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
    ]),
    passwordHint: new FormControl('', [
      Validators.required,
    ]),
    color: new FormControl('', [
      Validators.required,
    ]),
    avatar: new FormControl('', [
      Validators.required,
    ])
  })
  
  constructor(private rest: RestService, private listener: ListenerService) {}

  async ngOnInit(): Promise<void> {
    // Avatars and colors selection
    const avatars = JSON.parse((await this.rest.getAvatars()).data);
    const colors = JSON.parse((await this.rest.getColors()).data);
    
    this.avatars = Object.keys(avatars).map(key => { 
      return { name: key, value: `url(${avatars[key]}) center` } 
    })

    this.colors = Object.keys(colors).map(key => { 
      return { name: key, value: colors[key] } 
    });

    // Random checked input
    this.checkedAvatar = Math.floor(Math.random() * (this.avatars.length - 0));
    this.checkedColor = Math.floor(Math.random() * (this.colors.length - 0));
  }

  onRegister() {
    this.rest.register(this.form.value).subscribe(rsp => {
      const alert: IAlert = {
        alerTitle: 'Welcome to meowTasks',
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
 