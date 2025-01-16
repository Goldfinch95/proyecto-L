import { Component, OnInit } from '@angular/core';
import { FilaInfoService } from '../../services/fila-info.service';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'app-modal-info',
  imports: [ModalConfirmationComponent],
  templateUrl: './modal-info.component.html',
  styleUrl: './modal-info.component.scss'
})
export class ModalInfoComponent implements OnInit {
  selectedItem: any;

  constructor(private FilaInfoService: FilaInfoService) {}

  ngOnInit(): void {
    this.FilaInfoService.selectedItem$.subscribe((item) => {
      this.selectedItem = item;
    });
  }
}
