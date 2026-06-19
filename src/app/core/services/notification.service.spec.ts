/// <reference types="jasmine" />
import { NotificationService } from './notification.service';
import { NotificationType } from '../models/enums.model';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => { service = new NotificationService(); });

  it('debería emitir un mensaje de éxito', (done) => {
    service.message$.subscribe(data => {
      expect(data.msg).toBe('Guardado');
      expect(data.type).toBe(NotificationType.SUCCESS);
      done();
    });
    service.notify('Guardado', NotificationType.SUCCESS);
  });
});
