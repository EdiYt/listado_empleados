import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../models/empleados';
import { EmpleadoService } from '../../services/employee.service';

@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html',
  styleUrls: ['./formulario-empleado.component.css']
})
export class FormularioEmpleadoComponent {
  empleado: Employee = {
    id: 0,
    nombre: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    genero: ''
  };

  @Output() empleadoAgregado = new EventEmitter<void>();

  constructor(private empleadoService: EmpleadoService) {}

  onSubmit(): void {
    this.empleado.id = this.empleadoService.obtenerSiguienteId();
    this.empleadoService.agregarEmpleado(this.empleado);
    this.empleadoAgregado.emit();
    this.resetForm();
  }

  resetForm(): void {
    this.empleado = {
      id: 0,
      nombre: '',
      email: '',
      telefono: '',
      fechaNacimiento: '',
      genero: ''
    };
  }
}