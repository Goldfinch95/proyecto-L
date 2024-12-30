import { Component } from '@angular/core';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'app-modal-crear',
  imports: [ModalConfirmationComponent],
  templateUrl: './modal-crear.component.html',
  styleUrl: './modal-crear.component.scss'
})
export class ModalCrearComponent {

  inputElement: string = '';

  sendValue(input: HTMLInputElement): void {
    this.inputElement = input.value;
    if(this.inputElement === ''){
      console.log('agrega un valor')
      return
    } 
    console.log(`El valor del input es: ${this.inputElement}`);
    setTimeout(() => {
      input.value = '';   
    }, 500);  
    }
    
  }
  

