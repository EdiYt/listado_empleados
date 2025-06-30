import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormularioEmpleadoComponent } from './components/formulario-empleado/formulario-empleado.component';
import { ListaEmpleadoComponent } from './components/lista-empleado/lista-empleado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule, 
    FormularioEmpleadoComponent,
    ListaEmpleadoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listado-empleados';
}