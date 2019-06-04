import { Component } from '@angular/core';
import {ModalService} from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modalService: ModalService) {
  }

  openModalOne() {
    this.modalService.open();
  }

  openModalTwo() {
    this.modalService.open();
  }

  openModalThree() {
    this.modalService.open();
  }

}
