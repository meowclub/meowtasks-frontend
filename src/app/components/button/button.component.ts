import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import IButton from '../../interfaces/IButton';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIconComponent, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements IButton {
  @Input({ required: true })
  name: string = ''
  @Input({ required: false })
  icon: string|undefined = ''
  @Input({ required: false })
  routerLink: string = ''
  @Input({ required: false })
  disabled: boolean = false
  @Input({ required: false })
  backgroundColor: string = ''
  @Input({ required: false })
  textColor: string = ''
}
