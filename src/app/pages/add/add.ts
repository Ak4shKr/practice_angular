import { Component } from '@angular/core';
import { AddFormComponent } from '../../shared/components/add-form/add-form.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [AddFormComponent],
  template: `<app-add-form></app-add-form>`,
  styles: ``,
})
export class Add {}
