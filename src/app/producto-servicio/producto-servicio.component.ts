import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-servicio',
  templateUrl: './producto-servicio.component.html',
  styleUrls: ['./producto-servicio.component.css']
})
export class ProductoServicioComponent {
  producto={
    id: "id",
    nombre: "nombre",
    noParte: "no.Parte",
    idProveedores:"idProvedoress",
    tipo: "tipo",
    categoria: "categoria",
    descripcion: "descrc",
    unidad: "unidad",
    precio: "precio",
    existencia: "existencia",
    imagen: "imagen",
}
guardarProd() {

}//Cierre del metodo guardarEmp

modificarProd() {

}//Cierre del metodo modificarEmp

eliminarProd() {

}//Cierre del metodo eliminarEmp

consultarProd() {

}//Cierre del metodo consultarEmp

consultarTodoProd() {

}//Cierre del metodo consultarTodoEmp

limpiarProd(){

}//Cierre del metodo limpiarEmp

productos=[{
    id: "",
    nombre: "",
    noParte: "",
    idProveedores:"",
    tipo: "",
    categoria: "",
    descripcion: "",
    unidad: "",
    precio: "",
    existencia: "",
    imagen: "",
}];
}
