
import { Component } from '@angular/core';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';


@Component({
  selector: 'app-modal-ingresar',
  imports: [ModalConfirmationComponent],
  templateUrl: './modal-ingresar.component.html',
  styleUrl: './modal-ingresar.component.scss'
})
export class ModalIngresarComponent {
  selectedValue = '';

  onSelect(action: string){
    this.selectedValue = action;
    console.log(this.selectedValue)
  }
}
