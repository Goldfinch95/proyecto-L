import { Component, ViewChild } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import {FormsModule} from '@angular/forms'
import { ContainerBoxesComponent } from '../../components/container-boxes/container-boxes.component';

@Component({
  selector: 'app-fondo-fijo',
  imports: [ContainerBoxesComponent, TableComponent,FormsModule],
  templateUrl: './fondo-fijo.component.html',
  styleUrl: './fondo-fijo.component.scss'
})
export class FondoFijoComponent {
searchTerm: string = ''; // Para manejar el término de búsqueda
  tableData: any[] = []; // Datos recibidos del hijo
  filteredData: any[] = []; // Datos filtrados para mostrar

  // Referencia al hijo
  @ViewChild(TableComponent) tableComponent!: TableComponent;

  // Recibir los datos emitidos por el hijo
  receiveTableData(data: any[]) {
    this.tableData = data;
    this.filteredData = [...this.tableData]; // Inicializa los datos filtrados con todos los datos
  }

  // Lógica de filtrado según el término de búsqueda
  onSearch() {
    this.filteredData = this.tableData.filter((item) =>
      item.item.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.fecha.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    console.log('Datos filtrados:', this.filteredData); // Muestra los datos filtrados en la consola
  }


  // Método para limpiar el término de búsqueda y restablecer los datos
  clearSearch() {
    this.searchTerm = ''; // Limpia el campo de búsqueda
    this.filteredData = [...this.tableData]; // Restablece los datos originales
  }

  sendFilteredDataToTable() {
    if (this.tableComponent) {
      this.tableComponent.updateTable(this.filteredData);
    }
}
}
