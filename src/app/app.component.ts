import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSideComponent } from './components/nav-side/nav-side.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { ModalIngresarComponent } from './components/modal-ingresar/modal-ingresar.component';
import { ModalCrearComponent } from './components/modal-crear/modal-crear.component';



@Component({
  selector: 'app-root',
  imports: [NavSideComponent, NavComponent, TableComponent, ModalIngresarComponent, ModalCrearComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto_l';
}
