import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {
  // BehaviorSubject almacena y emite los datos compartidos
  private updateTable = new BehaviorSubject<any[]>([]);
  datos$ = this.updateTable.asObservable();

  // Método para actualizar los datos
  enviarDatos(datos: any[]) {
    this.updateTable.next(datos);
  }
}
