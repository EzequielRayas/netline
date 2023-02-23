import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-cot',
  templateUrl: './eliminar-cot.component.html',
  styleUrls: ['./eliminar-cot.component.css']
})
export class EliminarCotComponent {
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
    notas: "notas - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    estatus: "estatus"
}

}
