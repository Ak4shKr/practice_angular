import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  show(message: string, title: string = 'Warning') {
    this.toastr.warning(message, title);
  }
}