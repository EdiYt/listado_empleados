import { Component } from '@angular/core';
import { FormularioEmpleadoComponent } from './components/formulario-empleado/formulario-empleado.component';
import { ListaEmpleadoComponent } from './components/lista-empleado/lista-empleado.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormularioEmpleadoComponent,
    ListaEmpleadoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listado-empleados';
}