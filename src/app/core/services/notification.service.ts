import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationType } from '../models/enums.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private _message$ = new Subject<{msg: string, type: NotificationType}>();
  message$ = this._message$.asObservable();

  notify(msg: string, type: NotificationType) {
    this._message$.next({ msg, type });
  }
}
