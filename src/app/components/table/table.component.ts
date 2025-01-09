import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  @Output() dataEmitter = new EventEmitter<any[]>();

  @Input() data: any[] = [];

  tableItems = [
    { fecha: '05 oct 2022 14:30', item: 'Chino', gasto: 3000 },
    { fecha: '05 feb 2024 10:00', item: 'Libreria', gasto: 7400000 },
    { fecha: '10 mar 2024 08:45', item: 'Chino', gasto: 1000 },
    { fecha: '15 abr 2024 12:20', item: 'Agua', gasto: 380000 },
    { fecha: '20 may 2024 16:30', item: 'Chino', gasto: -3900 },
    { fecha: '25 jun 2024 11:15', item: 'Chino', gasto: 260000 },
    { fecha: '30 jul 2024 09:00', item: 'Libreria', gasto: 1300 },
    { fecha: '04 ago 2024 17:40', item: 'Libreria', gasto: 3800 },
    { fecha: '09 sep 2024 18:00', item: 'Agua', gasto: 150000 },
    { fecha: '14 oct 2024 07:00', item: 'Chino', gasto: 3000 },
    { fecha: '19 nov 2024 10:30', item: 'Libreria', gasto: 7400 },
    { fecha: '24 dic 2024 13:50', item: 'Chino', gasto: 1000 },
    { fecha: '01 ene 2025 08:00', item: 'Agua', gasto: -380000 },
    { fecha: '05 feb 2025 09:30', item: 'Chino', gasto: 3900 },
    { fecha: '10 mar 2025 14:00', item: 'Chino', gasto: 2600 },
    { fecha: '15 abr 2025 16:20', item: 'Libreria', gasto: 1300 },
    { fecha: '20 may 2025 18:10', item: 'Libreria', gasto: 3800 },
    { fecha: '25 jun 2025 12:30', item: 'Agua', gasto: 1500 },
    { fecha: '30 jul 2025 14:40', item: 'Chino', gasto: 3000000 },
    { fecha: '04 ago 2025 10:10', item: 'Libreria', gasto: 7400000 },
    { fecha: '09 sep 2025 15:00', item: 'Chino', gasto: -1000 },
    { fecha: '14 oct 2025 17:50', item: 'Agua', gasto: 3800 },
    { fecha: '19 nov 2025 09:00', item: 'Chino', gasto: 390000 },
    { fecha: '24 dic 2025 12:20', item: 'Chino', gasto: 2600 },
    { fecha: '31 dic 2025 11:30', item: 'Libreria', gasto: 130000 },
    { fecha: '01 ene 2026 10:00', item: 'Libreria', gasto: 3800 },
    { fecha: '05 feb 2026 14:30', item: 'Agua', gasto: 150000 }
  ];

  ngOnInit() {
    this.dataEmitter.emit(this.tableItems); // Emite los datos al componente padre
  }

  // ordena las fechas
  sortDate(ascending: boolean): void {
    // Verificar si hay elementos en 'data' y usarla para ordenar, sino usar 'tableItems'
    const listToSort = (this.data && this.data.length > 0) ? this.data : this.tableItems;
    
    listToSort.sort((a, b) => {
      // Convertir las fechas de string a objetos Date
      const dateA = this.convertToDate(a.fecha);
      const dateB = this.convertToDate(b.fecha);
    
      // Si 'ascending' es verdadero, ordena de mayor a menor, de lo contrario, de menor a mayor
      return ascending ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });
  
    // Emitir los datos ordenados
    this.dataEmitter.emit(listToSort);
  }
  
  // Función para convertir la fecha de 'DD MMM YYYY HH:MM' a objeto Date
  convertToDate(fecha: string): Date {
    const [day, month, year, time] = fecha.split(' ');
    
    // Crear una cadena compatible con el formato 'YYYY-MM-DDTHH:MM:00'
    const monthMap: { [key: string]: string } = {
      jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
      jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12'
    };
  
    const [hour, minute] = time.split(':');
    
    const formattedDate = `${year}-${monthMap[month.toLowerCase()]}-${day}T${hour}:${minute}:00`;
    
    // Crear el objeto Date
    return new Date(formattedDate);
  }

  // ordena las items
  sortItem(ascending: boolean): void {
    // Verificar si estamos usando 'data' o 'tableItems'
    const listToSort = (this.data && this.data.length > 0) ? this.data : this.tableItems;
  
    // Ordenar por 'item' (Cuenta)
    listToSort.sort((a, b) => {
      const itemA = a.item.toLowerCase();
      const itemB = b.item.toLowerCase();
  
      if (ascending) {
        return itemA > itemB ? 1 : itemA < itemB ? -1 : 0;
      } else {
        return itemA < itemB ? 1 : itemA > itemB ? -1 : 0;
      }
    });
  }

  // ordena las gastos
  sortNumbers(ascending: boolean): void {
    const listToSort = (this.data && this.data.length > 0) ? this.data : this.tableItems;
  
    listToSort.sort((a, b) => {
      if (ascending) {
        return a.gasto - b.gasto;  // Ordena de menor a mayor
      } else {
        return b.gasto - a.gasto;  // Ordena de mayor a menor
      }
    });
  }

  updateTable(newData: any[]) {
    this.data = newData;
    this.data.sort((a, b) => b.gasto - a.gasto); // Actualiza los datos de la tabla
    console.log('Datos actualizados en el hijo:', this.data); // Muestra los datos en la consola
  }

  formatGasto(gasto: number): string {
    return gasto.toLocaleString('de-DE');  // Usa la función toLocaleString para formatear con comas
  }
}
