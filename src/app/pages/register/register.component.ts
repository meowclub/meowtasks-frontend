import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  public avatars:string[] = [];
  public colors:string[] = [];
  public checkedAvatar:number = 0;
  public checkedColor:number = 0;
  
  constructor(private rest: RestService) {}

  async ngOnInit(): Promise<void> {
    const avatars = JSON.parse((await this.rest.getAvatars()).data);
    const colors = JSON.parse((await this.rest.getColors()).data);
    
    this.avatars = Object.keys(avatars).map(key => `url(${avatars[key]}) center`)
    this.colors = Object.keys(colors).map(key => colors[key]);

    // Random checked input
    this.checkedAvatar = Math.floor(Math.random() * (this.avatars.length - 0));
    this.checkedColor = Math.floor(Math.random() * (this.colors.length - 0));
  }
}
 