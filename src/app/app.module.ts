import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ProductoServicioComponent } from './producto-servicio/producto-servicio.component';
import { DimensionamientoComponent } from './dimensionamiento/dimensionamiento.component';
import { OrdenServicioComponent } from './orden-servicio/orden-servicio.component';
import { DetalleEquipoCliComponent } from './detalle-equipo-cli/detalle-equipo-cli.component';
import { MenuComponent } from './menu/menu.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministradorComponent } from './administrador/administrador.component';
import { VentasComponent } from './ventas/ventas.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EliminarCliComponent } from './cliente/eliminar-cli/eliminar-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ClienteComponent,
    EmpleadoComponent,
    ProveedorComponent,
    CotizacionComponent,
    ProductoServicioComponent,
    DimensionamientoComponent,
    OrdenServicioComponent,
    DetalleEquipoCliComponent,
    MenuComponent,
    EncabezadoComponent,
    InicioComponent,
    AdministradorComponent,
    VentasComponent,
    AlmacenComponent,
    ServiciosComponent,
    EliminarCliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
