import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

  @Output() dataEmitter = new EventEmitter<any[]>();

  tableItems = [
    { fecha: '2024-12-22', item: 'Chino', gasto: 3000 },
    { fecha: '2024-12-22', item: 'Libreria', gasto: 7400 },
    { fecha: '2024-12-22', item: 'Chino', gasto: 1000 },
    { fecha: '2024-12-22', item: 'Agua', gasto: 3800 },
    { fecha: '2024-12-22', item: 'Chino', gasto: 3900 },
    { fecha: '2024-12-22', item: 'Chino', gasto: 2600 },
    { fecha: '2024-12-22', item: 'Libreria', gasto: 1300 },
    { fecha: '2024-12-22', item: 'Libreria', gasto: 3800 },
    { fecha: '2024-12-22', item: 'Agua', gasto: 1500 }
  ];

  ngOnInit() {
    this.dataEmitter.emit(this.tableItems); // Emite los datos al componente padre
  }
}
