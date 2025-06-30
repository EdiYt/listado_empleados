import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/empleados';
import { EmpleadoService } from '../../services/employee.service';

@Component({
  selector: 'app-lista-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {
  empleados: Employee[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleados = this.empleadoService.obtenerEmpleados();
  }

  eliminarEmpleado(id: number): void {
    this.empleadoService.eliminarEmpleado(id);
    this.cargarEmpleados();
  }
}