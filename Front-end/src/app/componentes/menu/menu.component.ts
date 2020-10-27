import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  redirectToCliente(){
    this.router.navigate(['cliente']);
  }
  redirectToRestaurante(){
    this.router.navigate(['restaurante']);
  }
  redirectToMesa(){
    this.router.navigate(['mesa']);
  }
  redirectToReserva(){
    this.router.navigate(['reserva']);
  }

}
