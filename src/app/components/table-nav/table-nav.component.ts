import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../services/data-table.service';
import {FormsModule} from '@angular/forms'
import { UpdateDataService } from '../../services/update-data.service';

@Component({
  selector: 'app-table-nav',
  imports: [FormsModule],
  templateUrl: './table-nav.component.html',
  styleUrl: './table-nav.component.scss'
})
export class TableNavComponent implements OnInit {
  searchTerm: string = '';
  tableData: any[] = [];
  filteredData: any[] = [];

  constructor(private dataService: DataTableService,private UpdateDataService: UpdateDataService) {}
  
  ngOnInit() {
    // Nos suscribimos al Observable para recibir los datos actualizados
    this.dataService.datos$.subscribe((datos) => {
      this.tableData = datos;
      this.filteredData = [...this.tableData];
    });
  }

  onSearch() {
    this.filteredData = this.tableData.filter((item) =>
      item.item.toLowerCase().startsWith(this.searchTerm.toLowerCase())
    );
    console.log('Datos filtrados:', this.filteredData); // Muestra los datos filtrados en la consola
    this.UpdateDataService.enviarDatos(this.filteredData)
  }

  clearSearch() {
    this.searchTerm = ''; // Limpia el campo de búsqueda
    this.filteredData = [...this.tableData]; // Restablece los datos originales
  } 
}
