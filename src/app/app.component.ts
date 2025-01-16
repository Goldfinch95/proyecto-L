import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSideComponent } from './components/nav-side/nav-side.component';
import { NavComponent } from './components/nav/nav.component';
import { ModalIngresarComponent } from './components/modal-ingresar/modal-ingresar.component';
import { ModalCrearComponent } from './components/modal-crear/modal-crear.component';
import { ContainerBoxesComponent } from './components/container-boxes/container-boxes.component';
import { TableNavComponent } from './components/table-nav/table-nav.component';
import { ModalCalendarioComponent } from './components/modal-calendario/modal-calendario.component';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';




@Component({
  selector: 'app-root',
  imports: [NavSideComponent, NavComponent, ContainerBoxesComponent, ModalIngresarComponent, ModalCrearComponent, TableNavComponent, ModalCalendarioComponent, ModalInfoComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto_l';
}
