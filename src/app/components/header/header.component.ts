import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ListenerService } from '../../services/listener.service';
import { LoadingComponent } from '../loading/loading.component';
import { DropDownMenuComponent } from '../drop-down-menu/drop-down-menu.component';
import IItemMenu from '../../interfaces/IItemMenu';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LoadingComponent, DropDownMenuComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public token: string|null = ''
  public loading:boolean = true;
  public itemsMenu: IItemMenu[] = [
    {
      name: 'Create a account',
      routeLink: 'register',
      icon: 'matMoped'
    },
    {
      name: 'Sign in',
      routeLink: 'login',
      isButton: true,
      icon: 'matLogin'
    },
    {
      name: 'New task',
      routeLink: 'tasks/new',
      isButton: true,
      icon: 'matLogin',
      onlyLogged: true
    },
    {
      name: 'Logout',
      routeLink: 'logout',
      onlyLogged: true,
      icon: 'matLogin'
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
