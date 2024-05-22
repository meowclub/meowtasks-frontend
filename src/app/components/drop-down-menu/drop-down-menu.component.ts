import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import IItemMenu from '../../interfaces/IItemMenu';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-drop-down-menu',
  standalone: true,
  imports: [RouterModule, NgIconComponent],
  templateUrl: './drop-down-menu.component.html',
  styleUrl: './drop-down-menu.component.css'
})
export class DropDownMenuComponent {
  @Input({ required: true })
  itemsMenu: IItemMenu[] = []
  @Input({ required: true })
  token: string|null = null;
  public opened: boolean = false;

  onClick() {
    this.opened = !this.opened
  }
}
