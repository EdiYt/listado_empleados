import { Injectable } from '@angular/core';
import { Employee } from '../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private empleados: Employee[] = [
    { id: 1, nombre: 'Eduardo Contrero', email: 'eduardo@gmail.com', telefono: '477837465', fechaNacimiento: '12/03/00', genero: 'Masculino' },
    { id: 2, nombre: 'Ana Torres', email: 'ana@gmail.com', telefono: '477093615', fechaNacimiento: '10/02/03', genero: 'Femenino' },
    { id: 3, nombre: 'Diana Medina', email: 'diana@gmail.com', telefono: '478937482', fechaNacimiento: '03/06/02', genero: 'Femenino' },
    { id: 4, nombre: 'Fernando Platas', email: 'fernando@gmail.com', telefono: '477029384', fechaNacimiento: '07/04/06', genero: 'Masculino' },
    { id: 5, nombre: 'Erick Villaseñor', email: 'erick@gmail.com', telefono: '4776711854', fechaNacimiento: '10/07/04', genero: 'Masculino' }
  ];

  obtenerEmpleados(): Employee[] {
    return this.empleados;
  }

  agregarEmpleado(empleado: Employee): void {
    this.empleados.push(empleado);
  }

  eliminarEmpleado(id: number): void {
    this.empleados = this.empleados.filter(emp => emp.id !== id);
  }

  obtenerSiguienteId(): number {
    return this.empleados.length > 0 
      ? Math.max(...this.empleados.map(emp => emp.id)) + 1 
      : 1;
  }
}