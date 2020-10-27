import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { Cliente } from '../../modelos/cliente';
import {Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  listaCliente;
  clienteForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    cedula: new FormControl('', Validators.required)
  })

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }
  crearCliente(form: Cliente) {
    this.api.crearCliente(form).subscribe(data => {
      console.log(data);
    })
    //console.log(form)
  }
  listaClientes() {
    this.api.listarClientes().subscribe(data => {
      //this.listaMesa.push(data);
      this.listaCliente=data;
    })
  }
  redirectToMenu(){
    this.router.navigate(['menu']);
  }

}
