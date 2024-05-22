import { EventEmitter, Injectable, Output } from '@angular/core';
import IAlert from '../interfaces/IAlert';

@Injectable({
  providedIn: 'root'
})
export class ListenerService {
  @Output()
  newAlert: EventEmitter<IAlert> = new EventEmitter();
  @Output()
  token: EventEmitter<string|null> = new EventEmitter();
  @Output()
  tokenSaved: EventEmitter<string|null> = new EventEmitter();

  constructor() { }

}
