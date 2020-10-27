import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { Mesa } from '../../modelos/mesa';
import {Router } from '@angular/router';
@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  listaMesa;
  mesaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    id_restaurante: new FormControl('', Validators.required),
    posicion_x: new FormControl('', Validators.required),
    posicion_y: new FormControl('', Validators.required),
    planta: new FormControl('', Validators.required),
    capacidad: new FormControl('', Validators.required)
  })
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }
  crearMesa(form: Mesa) {
    this.api.crearMesa(form).subscribe(data => {
      console.log(data);
    })
    //console.log(form)
  }
  listaTodasMesas() {
    this.api.listarTodasMesas().subscribe(data => {
      //this.listaMesa.push(data);
      this.listaMesa=data;
    })
  }
  redirectToMenu(){
    this.router.navigate(['menu']);
  }

}
