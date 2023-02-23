import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-ord',
  templateUrl: './eliminar-ord.component.html',
  styleUrls: ['./eliminar-ord.component.css']
})
export class EliminarOrdComponent {
  orden={
    id: "id",
    cliente: {
        empresa: "empresa",
        nombre: "nombre",
        telefono: "telefono",
        correo: "correo",
        direccion: "direccion",
    },
    empleado: {
        recibe: "recibe",
        participa: "participa",

    },
    fecha: {
        recepcion: "recepcion",
        atencion: "atencion"
    },
    horario: {
        inicio: "inicio",
        fin: "fin",
    },
    reporte: "reporte",
    trabajo: "trabajo",
    material:
        {
            nombre: "nombre",
            noParte: "noParte",
            descripcion: "descripcion",
            unidad: "unidad",
            cantidad: "cantidad"
        },
    notas: "notas -     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    estatus: "estatus"
}

}
