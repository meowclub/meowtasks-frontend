import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ListenerService } from '../../services/listener.service';
import { LoadingComponent } from '../loading/loading.component';
import { DropDownMenuComponent } from '../drop-down-menu/drop-down-menu.component';
import IItemMenu from '../../interfaces/IItemMenu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LoadingComponent, DropDownMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public token: string|null = ''
  public loading:boolean = true;
  public itemsMenu: IItemMenu[] = [
    {
      name: 'Create a account',
      routeLink: 'register'
    },
    {
      name: 'Sign in',
      routeLink: 'login',
      isButton: true
    },
    {
      name: 'Logout',
      routeLink: 'logout',
      onlyLogged: true
    },
  ]
  
  constructor(private listener: ListenerService, private router: Router) {
    this.listener.token.subscribe(token => {
      this.token = token
      
      setTimeout(() => {
        this.loading = false
      }, 100);
    })

    this.listener.tokenDeleted.subscribe(() => {
      this.token = null
    })
  }

  onLogout() {
    this.token = '';
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}
