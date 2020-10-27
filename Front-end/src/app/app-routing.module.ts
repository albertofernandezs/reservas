import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from '@angular/router'
import {ReservaComponent} from './componentes/reserva/reserva.component'
import {ClienteComponent} from './componentes/cliente/cliente.component'
import {RestauranteComponent} from './componentes/restaurante/restaurante.component'
import {MesaComponent} from './componentes/mesa/mesa.component'
import {MenuComponent} from './componentes/menu/menu.component'

const routes: Routes=[
  {path: '', redirectTo: 'menu' , pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'reserva', component: ReservaComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'restaurante', component: RestauranteComponent},
  {path: 'mesa', component: MesaComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
