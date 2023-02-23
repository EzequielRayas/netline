import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-emp',
  templateUrl: './eliminar-emp.component.html',
  styleUrls: ['./eliminar-emp.component.css']
})
export class EliminarEmpComponent {


  empleado={
    id: "id",
    nombre: "nombre",
    apellido: "apellido",
    telefono: "telefono",
    correo: "correo",
    direccion: "direccion",
    fechacontratacion: "fechacontratacion",
    puesto: "puesto",
    imagen: "imagen",
    estatus: "estatus",
    idUsuario: "idUsuario"
}

}
