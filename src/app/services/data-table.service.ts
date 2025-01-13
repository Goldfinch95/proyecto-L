import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  private dataTable = new BehaviorSubject<any[]>([]);
  datos$ = this.dataTable.asObservable();

  enviarDatos(datos: any[]) {
    if (datos.length > 0) {
      this.dataTable.next(datos); // Solo actualiza si los datos no están vacíos
    } else {
      console.error("Intento de enviar datos vacíos al servicio");
    }
  }
}
