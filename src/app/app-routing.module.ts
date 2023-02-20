import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//lista de componentes
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ProductoServicioComponent } from './producto-servicio/producto-servicio.component';
import { DimensionamientoComponent } from './dimensionamiento/dimensionamiento.component';
import { OrdenServicioComponent } from './orden-servicio/orden-servicio.component';
import { DetalleEquipoCliComponent } from './detalle-equipo-cli/detalle-equipo-cli.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { VentasComponent } from './ventas/ventas.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { ServiciosComponent } from './servicios/servicios.component';

//eliminar
import { EliminarCliComponent } from './cliente/eliminar-cli/eliminar-cli.component';


const routes: Routes = [

  //prueba eliminar
  {path:"eliminar-cliente",component:EliminarCliComponent},

  {path:"inicio",component:InicioComponent},
  {path:"usuario",component:UsuarioComponent},




  {
    path: "admin", component: AdministradorComponent,
    children: [
      { path: "empleado", component: EmpleadoComponent},
      { path: "cliente", component: ClienteComponent },
      {path:"provedor",component:ProveedorComponent},
    ]
  },
  {
    path: "venta", component:VentasComponent,
    children: [
      {path:"cotizacion",component:CotizacionComponent},
    ]
  },
  {
    path:"alma",component:AlmacenComponent,
    children: [
      {path:"productoServ",component:ProductoServicioComponent},
    ]
  },
  {
    path:"serv", component:ServiciosComponent,
    children: [
      {path:"dimensionamiento",component:DimensionamientoComponent},
    {path:"ordenServ",component:OrdenServicioComponent},
    {path:"detalleEqui",component:DetalleEquipoCliComponent},
    ]
  },
  {path:"**", redirectTo:"/inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
