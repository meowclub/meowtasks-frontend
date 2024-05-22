import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ListenerService } from '../../services/listener.service';
import IMeowUser from '../../interfaces/IMeowUser';
import { findToken } from '../../lib/functions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public token: string|null = ''
  public meowUser: IMeowUser = {
    meowUserId: 0,
    nickname: '',
    passwordHint: '',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  constructor(private listener: ListenerService, private rest: RestService) {
    this.listener.token.subscribe(token => {
      this.token = token
    })

    this.listener.meowUser.subscribe(meowUser => {
      this.meowUser = meowUser
    })
  }

  ngOnInit(): void {
    if (!this.token) {
      this.token = findToken();

      if (this.token) {
        this.rest.me(this.token).subscribe(rsp => {
          this.meowUser = rsp.data
        })
      }
    }
  }
}
