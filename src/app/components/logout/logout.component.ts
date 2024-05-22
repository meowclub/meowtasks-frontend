import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListenerService } from '../../services/listener.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  template: '<div></div>',
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private listener: ListenerService) {}

  ngOnInit(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
    this.listener.tokenDeleted.emit()
  }
}
