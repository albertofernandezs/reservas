import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { Reserva } from '../../modelos/reserva';
import { Mesa } from 'src/app/modelos/mesa';
import {Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reservaForm = new FormGroup({
    id_restaurante: new FormControl('', Validators.required),
    id_mesa: new FormControl('', Validators.required),
    id_cliente: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    hora_inicial: new FormControl('', Validators.required),
    hora_final: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required)
  })
  parametroReservaForm = new FormGroup({
    id_restaurante: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    hora_inicial: new FormControl('', Validators.required),
    hora_final: new FormControl('', Validators.required)
  })
  mesaForm = new FormGroup({
    id_restaurante: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    id_cliente: new FormControl()
  })

  listaMesa: Mesa[];
  listaReserva: Reserva[];
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  onSub(form: Reserva) {
    this.api.crearReserva(form).subscribe(data => {
      console.log(data);
    })
    //console.log(form)
  }

  listaMesas(form) {
    this.api.listarMesas(form).subscribe(data => {
      //this.listaMesa.push(data);
      this.listaMesa=data;
    })
  }
  listaReservas(form) {
    this.api.listarReservas(form).subscribe(data => {
      //this.listaMesa.push(data);
      this.listaReserva=data;
    })
  }
  redirectToMenu(){
    this.router.navigate(['menu']);
  }

}
