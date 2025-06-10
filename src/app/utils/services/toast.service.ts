import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private messageService: MessageService) {}

  show(summary: string = 'Notification', detail: string = 'This is a notification message') {
        this.messageService.add({ severity: 'info', summary: summary, detail: detail, life: 2000 });
    }
}