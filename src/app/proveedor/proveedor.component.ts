import { Component } from '@angular/core';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {
  proveedor={
    id: "id",
    nombre: "nombre",
    direccion: "direccion",
    telefono: "telefono",
    correo: "correo",
}

guardarPro() {

}//Cierre del metodo guardarEmp

modificarPro() {

}//Cierre del metodo modificarEmp

eliminarPro() {

}//Cierre del metodo eliminarEmp

consultarPro() {

}//Cierre del metodo consultarEmp

consultarTodoPro() {

}//Cierre del metodo consultarTodoEmp

limpiarPro(){

}//Cierre del metodo limpiarEmp
proveedores=[
  { id: "1",
  nombre: "Proveedor A",
  direccion: "Calle 123, Col. Centro, Ciudad de México",
  telefono: "55-1234-5678",
  correo: "proveedora@proveedora.com",},
  { id: "2",
  nombre: "Proveedor B",
  direccion: "Avenida 456, Col. Roma, Guadalajara",
  telefono: "33-5678-9012",
  correo: "bproveedor@bproveedor.com",},
  { id: "3",
  nombre: "Proveedor C",
  direccion: "Boulevard 789, Col. Polanco, Monterrey",
  telefono: "81-9012-3456",
  correo: "cproveedor@cproveedor.com",},

];
}
