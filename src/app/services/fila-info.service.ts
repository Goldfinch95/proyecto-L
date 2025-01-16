import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilaInfoService {
  
  private selectedItemSource = new BehaviorSubject<any>(null); // Almacena el ítem seleccionado
  selectedItem$ = this.selectedItemSource.asObservable(); // Observable para suscribirse a los cambios

  constructor() {}

  // Método para actualizar el ítem seleccionado
  setSelectedItem(item: any): void {
    this.selectedItemSource.next(item);
  }

  // Método para obtener el ítem seleccionado (sin Observable)
  getSelectedItem(): any {
    return this.selectedItemSource.value;
  }
}
