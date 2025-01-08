import { Routes } from '@angular/router';
import { CajaComponent } from './pages/caja/caja.component';
import { FondoFijoComponent } from './pages/fondo-fijo/fondo-fijo.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'caja',
        pathMatch: 'full',
      },
    {
        path: 'caja',
        component: CajaComponent,
      },
      {
        path: 'fondo_fijo',
        component: FondoFijoComponent,
      },
];
