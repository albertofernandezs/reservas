import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './componentes/menu/menu.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { RestauranteComponent } from './componentes/restaurante/restaurante.component';
import { MesaComponent } from './componentes/mesa/mesa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReservaComponent,
    MenuComponent,
    ClienteComponent,
    RestauranteComponent,
    MesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
