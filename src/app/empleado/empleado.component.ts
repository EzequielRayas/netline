import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  resultado!: string;

  constructor(private fb: FormBuilder) {

  }

  formularioContacto = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]]
  });

  onSubmit() {
    if (this.formularioContacto.valid) {
      this.resultado = 'Todos los datos son válidos.';
    } else {
      this.resultado = 'Hay datos inválidos en el formulario.';
    }
  }

  empleado={
    id: "id",
    nombre: "nombre",
    apellido: "apellido",
    telefono: "telefono",
    correo: "correo",
    direccion: "direccion",
    puesto: "puesto",
    imagen: "imagen",
    estatus: "estatus",
    idUsuario: "idUsuario"
}

  guardarEmp() {

  }//Cierre del metodo guardarEmp

  modificarEmp() {

  }//Cierre del metodo modificarEmp

  eliminarEmp() {

  }//Cierre del metodo eliminarEmp

  consultarEmp() {

  }//Cierre del metodo consultarEmp

  consultarTodoEmp() {

  }//Cierre del metodo consultarTodoEmp

  limpiarEmp(){
    this.empleado.id="";
    this.empleado.nombre="";
    this.empleado.telefono="";
    this.empleado.correo="";
    this.empleado.direccion="";
    this.empleado.puesto="";
    this.empleado.imagen="";
    this.empleado.estatus="";
    this.empleado.idUsuario="";



  }//Cierre del metodo limpiarEmp

  empl = [
    { codigo: "1",
    nombre: "Humberto",
    apellido: "Contreras",
    telefono: "336547891",
    correo: "Hcontreras@correo.com",
    direccion: "Calle 1 #123, Ciudad",
    puesto: "Gerente de Ventas<",
    imagen: "imagen.jpg",
    estatus: "Activo" },
    { codigo: "2",
    nombre: "María",
    apellido: "Gómez",
    telefono: "0987654321",
    correo: "mariagomez@mail.com",
    direccion: "Calle 2 #456, Ciudad",
    puesto: "Asistente Administrativo",
    imagen: "imagen.jpg",
    estatus: "Inactivo" },
    { codigo: "3",
    nombre: "Pablo ",
    apellido: "Hernández",
    telefono: "2345678901",
    correo: "pablohernandez@mail.com",
    direccion: "Calle 3 #789, Ciudad",
    puesto: "Técnico de Soporte",
    imagen: "imagen.jpg",
    estatus: "activo" },
  ];
}
