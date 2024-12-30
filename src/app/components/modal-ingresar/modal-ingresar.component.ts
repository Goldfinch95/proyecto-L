import { Component } from '@angular/core';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'app-modal-ingresar',
  imports: [ModalConfirmationComponent],
  templateUrl: './modal-ingresar.component.html',
  styleUrl: './modal-ingresar.component.scss',
})
export class ModalIngresarComponent {
  selectedValue: string = '';
  selectedItem: string = '';
  selectedGasto: any = '';
  itemList = ['Chino', 'Librería', 'Agua'];

  onSelectItem(item: string) {
    this.selectedValue = item;
  }
  onSelectConfirmation(gastoInput: any) {
    this.selectedGasto = Number(gastoInput.value);
    if (this.selectedValue === '' || this.selectedGasto <= 0) {
      console.log('ingrese un valor');
      setTimeout(() => {
        gastoInput.value = ''; // Limpia el valor del input
        gastoInput.placeholder = 'Gasto'; // Reinicia el placeholder
        this.selectedValue = ''; // Reinicia selectedValue
      }, 500);
      return;
    }
    console.log(`Item: ${this.selectedValue} Gasto: $${this.selectedGasto}`);
    setTimeout(() => {
      gastoInput.value = ''; // Limpia el valor del input
      gastoInput.placeholder = 'Gasto'; // Reinicia el placeholder
      this.selectedValue = ''; // Reinicia selectedValue
    }, 500); // Ajusta el tiempo de espera si es necesario
  }
}
