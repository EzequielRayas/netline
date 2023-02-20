import { Component } from '@angular/core';

@Component({
  selector: 'app-orden-servicio',
  templateUrl: './orden-servicio.component.html',
  styleUrls: ['./orden-servicio.component.css']
})
export class OrdenServicioComponent {

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

guardarOrd() {

}//Cierre del metodo guardarEmp

modificarOrd() {

}//Cierre del metodo modificarEmp

eliminarOrd() {

}//Cierre del metodo eliminarEmp

consultarOrd() {

}//Cierre del metodo consultarEmp

consultarTodoOrd() {

}//Cierre del metodo consultarTodoEmp

limpiarOrd(){


}//Cierre del metodo limpiarEmp



ordens=[{
  id: "",
    cliente: {
        empresa: "",
        nombre: "",
        telefono: "",
        correo: "",
        direccion: "",
    },
    empleado: {
        recibe: "",
        participa: "",

    },
    fecha: {
        recepcion: "",
        atencion: ""
    },
    horario: {
        inicio: "",
        fin: "",
    },
    reporte: "",
    trabajo: "",
    material:
        {
            nombre: "",
            noParte: "",
            descripcion: "",
            unidad: "",
            cantidad: ""
        },
    notas: "",
    estatus: ""
}];
}
