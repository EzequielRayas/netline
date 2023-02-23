import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-prov',
  templateUrl: './eliminar-prov.component.html',
  styleUrls: ['./eliminar-prov.component.css']
})
export class EliminarProvComponent {
  proveedor={
    id: "id",
    nombre: "nombre",
    direccion: "direccion",
    telefono: "telefono",
    correo: "correo",
  }

}
