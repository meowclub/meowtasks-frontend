import { EventEmitter, Injectable, Output } from '@angular/core';
import IAlert from '../interfaces/IAlert';
import IMeowUser from '../interfaces/IMeowUser';

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
  @Output()
  tokenDeleted: EventEmitter<null> = new EventEmitter();
  @Output()
  meowUser: EventEmitter<IMeowUser> = new EventEmitter();

  constructor() { }

}
