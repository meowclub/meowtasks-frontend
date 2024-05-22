import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ListenerService } from '../../services/listener.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LoadingComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public token: string|null = ''
  public loading:boolean = true;
  
  constructor(private listener: ListenerService, private router: Router) {
    this.listener.token.subscribe(token => {
      this.token = token
      
      setTimeout(() => {
        this.loading = false
      }, 100);
    })
  }

  onLogout() {
    this.token = '';
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}
