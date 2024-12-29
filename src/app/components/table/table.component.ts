import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  tableItems = [
  { fecha: '2024-12-22', item: 'Chino', gasto: 3000 },
  { fecha: '2024-12-22', item: 'Libreria', gasto: 7400 },
  { fecha: '2024-12-22', item: 'Chino', gasto: 1000 },
  { fecha: '2024-12-22', item: 'Agua', gasto: 3800 },
  { fecha: '2024-12-22', item: 'Chino', gasto: 3900 },
  { fecha: '2024-12-22', item: 'Chino', gasto: 2600 },
  { fecha: '2024-12-22', item: 'Libreria', gasto: 1300 },
  { fecha: '2024-12-22', item: 'Libreria', gasto: 3800 },
  { fecha: '2024-12-22', item: 'Agua', gasto: 1500 },
  ]
}
