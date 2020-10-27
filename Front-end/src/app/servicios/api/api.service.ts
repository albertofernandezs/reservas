import { Injectable } from '@angular/core';
import { Reserva } from '../../modelos/reserva';
import { Mesa } from '../../modelos/mesa';
import { Cliente } from '../../modelos/cliente';
import { Restaurante } from '../../modelos/restaurante';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: String = "http://localhost:9090/api/";
  constructor(private http: HttpClient) { }


  crearReserva(form: Reserva): Observable<Reserva> {
    let direccion = this.url + "reserva";

    return this.http.post<Reserva>(direccion, form);
  }
  crearCliente(form: Cliente): Observable<Cliente> {
    let direccion = this.url + "cliente";

    return this.http.post<Cliente>(direccion, form);
  }
  listarClientes() {
    let direccion = this.url + "cliente";

    return this.http.get<Cliente[]>(direccion);
  }
  crearMesa(form: Mesa): Observable<Mesa> {
    let direccion = this.url + "mesa";

    return this.http.post<Mesa>(direccion, form);
  }
  listarTodasMesas() {
    let direccion = this.url + "mesa";

    return this.http.get<Mesa[]>(direccion);
  }
  crearRestaurante(form: Restaurante): Observable<Restaurante> {
    let direccion = this.url + "restaurante";
    return this.http.post<Restaurante>(direccion, form);
  }
  listarRestaurantes() {
    let direccion = this.url + "restaurante";

    return this.http.get<Restaurante[]>(direccion);
  }

  listarMesas(form): Observable<Mesa[]> {
    let direccion = this.url + "mesa/lista"
    let params = new HttpParams();
    params = params.append('id_restaurante', form.id_restaurante);
    params = params.append('fecha', form.fecha);
    params = params.append('hora_inicial', form.hora_inicial);
    params = params.append('hora_final', form.hora_final);
    //console.log("ideeeeee"+String(form.id_restaurante));
    return this.http.get<Mesa[]>(direccion, { params: params });
  }

  listarReservas(form): Observable<Reserva[]> {
    let direccion = this.url + "reserva/lista"
    let params = new HttpParams();
    params = params.append('id_restaurante', form.id_restaurante);
    params = params.append('fecha', form.fecha);
    if (form.id_cliente != null) {
      params = params.append('id_cliente', form.id_cliente);
    }
    //console.log("ideeeeee"+String(form.id_restaurante));
    return this.http.get<Reserva[]>(direccion, { params: params });
  }

}
