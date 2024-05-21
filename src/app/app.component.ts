import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';
import { ListenerService } from './services/listener.service';
import IAlert from './interfaces/IAlert';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AlertComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'meowtasks-frontend';
  public alert: IAlert = {
    alertContent: '',
    alertType: ''
  }
  public isAlertActive: boolean = false;

  constructor(private listener: ListenerService) {}

  ngOnInit(): void {
    this.listener.newAlert.subscribe(data => {
      this.alert = data;
      
      // Without alertTitle, set default values
      if (!data.alerTitle) {
        this.alert.alerTitle = data.alertType == 'danger' ? '¡Ups!, error ocurred' : data.alertType == 'warning' ? 'Precaution ;w;' : 'All good!'
      }

      this.isAlertActive = true

      setTimeout(() => {
        this.isAlertActive = false
      }, 2000);
    })
  }
}
