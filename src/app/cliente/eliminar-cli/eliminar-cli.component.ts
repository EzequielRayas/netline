import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar-cli',
  templateUrl: './eliminar-cli.component.html',
  styleUrls: ['./eliminar-cli.component.css']
})
export class EliminarCliComponent {

  cliente={
    id: "id",
    nombre: "nombre",
    tipo: "tipo",
    direccion: "direccion",
    rfc: "rfc",
    responsable: {
        nombre: "nombreRes",
        apellido: "apellidoRes",
        telefono: "TelefonoRes",
        correo: "CorreoRes"
    },
    horario: {
        inicio: "inicio",
        fin: "fin"
    },
    imagen: "imagen",
    estatus: "estatus",
    idUsuario: "idUsuario"
}



//CLIENTES
clientes=[
  {id: "1",
  nombre: "Juan Pérez",
  tipo: "Persona física",
  direccion: "Calle 123, Colonia Centro, Ciudad de México",
  rfc: "PEJU851112XXX",
  responsable: {
      nombre: "Ana",
      apellido: "Sánchez",
      telefono: "5555-5555",
      correo: "ana.sanchez@gmail.com"
  },
  horario: {
      inicio: "9:00 am",
      fin: "6:00 pm"
  },
  imagen: "https://example.com/cliente1.jpg",
  estatus: "Activo",
  idUsuario: ""},
  {id: "2",
  nombre: "Empresa ABC S.A. de C.V.",
  tipo: "Persona moral",
  direccion: "Av. Insurgentes Sur 1234, Colonia del Valle, Ciudad de México",
  rfc: "ABC123456XYZ",
  responsable: {
      nombre: "Ricardo",
      apellido: "González",
      telefono: "(55) 4444-4444",
      correo: "ricardo.gonzalez@empresaabc.com"
  },
  horario: {
      inicio: "8:00 am",
      fin: "5:00 pm"
  },
  imagen: "https://example.com/cliente2.jpg",
  estatus: "Inactivo",
  idUsuario: ""},
  {id: "3",
  nombre: "d",
  tipo: "s",
  direccion: "d",
  rfc: "s",
  responsable: {
      nombre: "d",
      apellido: "s",
      telefono: "d",
      correo: "s"
  },
  horario: {
      inicio: "d",
      fin: "s"
  },
  imagen: "d",
  estatus: "s",
  },

];

}
