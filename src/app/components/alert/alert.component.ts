import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  @Input({ required: true })
  alertTitle:string = '';
  @Input({ required: true })
  alertContent:string = '';
  @Input({ required: true })
  alertType:string = ''
  @Input({ required: true })
  isActive:boolean = false;

  getClassesByType() {
    return this.alertType == 'danger' ? 'alert-danger' 
      : this.alertType == 'warning' ? 'alert-warning' 
      : 'alert-success'
  }
}
