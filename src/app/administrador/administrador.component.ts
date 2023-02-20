import { Component } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {
  gestion="";

  verEmp(){
    this.gestion="Empleados";
  }

  verCli(){
    this.gestion="Clientes";
  }

  verPro(){
    this.gestion="provedor";
  }

  
}
