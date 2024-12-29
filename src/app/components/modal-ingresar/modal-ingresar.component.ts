import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-ingresar',
  imports: [NgClass],
  templateUrl: './modal-ingresar.component.html',
  styleUrl: './modal-ingresar.component.scss'
})
export class ModalIngresarComponent {
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
