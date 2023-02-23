import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-dim',
  templateUrl: './eliminar-dim.component.html',
  styleUrls: ['./eliminar-dim.component.css']
})
export class EliminarDimComponent {
  dimen={
    id: "id",
    nombre: "nombre",
    cliente: {
        empresa: "empresacli",
        nombre: "nombrecli",
        telefono: "telcli",
        correo: "correoCli",
        direccion: "direccionCli",
    },
    empleado: {
        recibe: "recibe",
        participa: "participa",
    },
    fecha: {
        recepcion: "recepcion",
        atencion: "atencion"
    },
    hora: "hora",
    reporte: "reporte",
    descripcion: "descripcion",
    servicios:
        {
            nombre: "nombreSer",
            categoria: "categoriaSer",
            descripcion: "descripcionSer"
        },
    material:
        {
            nombre: "nombreMateri",
            noParte: "NoParte",
            descripcion: "descripcionMat",
            unidad: "unidadMat",
            cantidad: "cantidadMat"
        },
    dias: "dias",
    horario: "horas",
    peronal: "personal",
    notas: "notas - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    estatus: "estatus"
}
}
