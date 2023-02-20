import { Component } from '@angular/core';

@Component({
  selector: 'app-dimensionamiento',
  templateUrl: './dimensionamiento.component.html',
  styleUrls: ['./dimensionamiento.component.css']
})
export class DimensionamientoComponent {
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
        notas: "notas",
        estatus: "estatus"
    }
    
guardarDim() {

}//Cierre del metodo guardarEmp

modificarDim() {

}//Cierre del metodo modificarEmp

eliminarDim() {

}//Cierre del metodo eliminarEmp

consultarDim() {

}//Cierre del metodo consultarEmp

consultarTodoDim() {

}//Cierre del metodo consultarTodoEmp

limpiarDim(){


}//Cierre del metodo limpiarEmp

dimens=[{
  id: "",
  nombre: "",
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
  hora: "",
  reporte: "",
  descripción: "",
  servicios:
      {
          nombre: "",
          categoria: "",
          descripcion: ""
      },
  material:
      {
          nombre: "",
          noParte: "",
          descripcion: "",
          unidad: "",
          cantidad: ""
      },
  dias: "",
  horario: "",
  peronal: "",
  notas: "",
  estatus: ""
}];
}
