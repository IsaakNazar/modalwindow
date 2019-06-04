import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ModalService {

  private modal = new Subject();

  getModal() {
    return this.modal;
  }

  open() {
    console.log('open');
    this.modal.next(true);
  }

  close() {
    this.modal.next(false);
  }
}
