import { EventEmitter, Injectable, Output } from '@angular/core';
import IAlert from '../interfaces/IAlert';

@Injectable({
  providedIn: 'root'
})
export class ListenerService {
  @Output()
  newAlert: EventEmitter<IAlert> = new EventEmitter();

  constructor() { }

}
