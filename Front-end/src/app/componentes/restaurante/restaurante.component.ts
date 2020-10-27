import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { Restaurante } from '../../modelos/restaurante';
import {Router } from '@angular/router';
@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  listaRestaurante;
  restauranteForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required)
  })

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }
  crearRestaurante(form: Restaurante) {
    this.api.crearRestaurante(form).subscribe(data => {
      console.log(data);
    })
    //console.log(form)
  }
  listaRestaurantes() {
    this.api.listarRestaurantes().subscribe(data => {
      //this.listaMesa.push(data);
      this.listaRestaurante=data;
    })
  }
  redirectToMenu(){
    this.router.navigate(['menu']);
  }
}
