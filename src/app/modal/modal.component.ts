import { Component, OnInit } from '@angular/core';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isShowing;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.getModal().subscribe(isOpen => {
      this.isShowing = isOpen as boolean;
    });
  }

  closeModal() {
    this.modalService.close();
  }

}
