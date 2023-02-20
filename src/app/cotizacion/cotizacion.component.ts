import { Component } from '@angular/core';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent {
    cotizacion={
        id: "id",
        nombre: "nombre",
        cliente: {
            empresa: "empresaCli",
            nombre: "nombreCli",
            telefono: "telefonoCli",
            correo: "correoCli",
            direccion: "direccionCli",
        },
        empleado: {
            recibe: "recibeEmp",
            participa:"participaEmp",
        },
        fecha: {
            recepcion: "recepcion",
            vigencia: "vigencia"
        },
        pago: "pago",
        servicios:
            {
                cantidad: "cantidadSer",
                imagen: "Imagen",
                descripcion: "descripcionSer",
                precio: "precioSer",
                subtotal: "subtotalSer"
            },
        productos:
            {
                cantidad: "cabtidadPro",
                garantia: "garantia",
                entrega: "entrega",
                imagen: "image",
                descripcion: "descripcionProd",
                precio: "precioPro",
                utilidad: "utilidadpro",
                importe: "importe",
                subtotal: "subtotalProd",
                proveedor:"provedorPro"
            },
        total: "total",
        notas: "notas",
        estatus: "estatus"
    }
    
guardarCot() {

}//Cierre del metodo guardarEmp

modificarCot() {

}//Cierre del metodo modificarEmp

eliminarCot() {

}//Cierre del metodo eliminarEmp

consultarCot() {

}//Cierre del metodo consultarEmp

consultarTodoCot() {

}//Cierre del metodo consultarTodoEmp

limpiarCot(){


}//Cierre del metodo limpiarEmp

cotizacions=[{
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
      participa: [
          "",
          "",
      ]
  },
  fecha: {
      recepcion: "",
      vigencia: ""
  },
  pago: "",
  servicios:
      {
          cantidad: "",
          imagen: "",
          descripcion: "",
          precio: "",
          subtotal: ""
      },
  productos:
      {
          cantidad: "",
          garantia: "",
          entrega: "",
          imagen: "",
          descripcion: "",
          precio: "",
          utilidad: "",
          importe: "",
          subtotal: "",
          proveedor:""
      },
  total: "",
  notas: "",
  estatus: ""
}];
}
