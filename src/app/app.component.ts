import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';
import { ListenerService } from './services/listener.service';
import IAlert from './interfaces/IAlert';
import { findToken } from './lib/functions';
import { LoadingComponent } from './components/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AlertComponent, LoadingComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'meowtasks-frontend';
  public alert: IAlert;
  public isAlertActive;
  public token: string|null = '';
  public loading: boolean = true;

  constructor(private listener: ListenerService) {
    this.alert = {
      alertContent: '',
      alertType: ''
    }

    this.isAlertActive = false;
  }

  ngOnInit(): void {
    // New alerts
    this.listener.newAlert.subscribe(data => {
      this.alert = data;
      
      // Without alertTitle, set default values
      if (!data.alerTitle) {
        this.alert.alerTitle = data.alertType == 'danger' ? '¡Ups!, error ocurred' : data.alertType == 'warning' ? 'Precaution ;w;' : 'All good!'
      }

      this.isAlertActive = true

      setTimeout(() => {
        this.isAlertActive = false
      }, 1000);
    })
    
    // Find token and send to subscribers
    this.token = findToken();
    this.listener.token.emit(this.token)

    setTimeout(() => {
      this.loading = false;
    }, 500);

    // In case of to be saved the token, send to subscribers
    this.listener.tokenSaved.subscribe(token => {
      this.token = token
      this.listener.token.emit(this.token)
    })
  }
}
