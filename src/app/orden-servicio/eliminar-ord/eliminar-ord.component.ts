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
    notas: "notas",
    estatus: "estatus"
}

}
