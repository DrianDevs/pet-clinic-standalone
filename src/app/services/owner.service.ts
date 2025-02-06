import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Owner } from '../models/owner';
import { Pet } from '../models/pet';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  private url = environment.API_URL;
  constructor(private http: HttpClient) {}

  listarOwners() {
    let body = JSON.stringify({
      accion: 'ListarOwners',
    });
    return this.http.post<Owner[]>(this.url, body);
  }

  selOwnerId(idOwner: number) {
    let body = JSON.stringify({
      accion: 'ObtenerOwnerId',
      id: idOwner,
    });
    return this.http.post<Owner>(this.url, body);
  }

  anadirOwner(owner: Owner) {
    let body = JSON.stringify({
      accion: 'AnadeOwner',
      owner: owner,
    });
    return this.http.post<Owner[]>(this.url, body);
  }

  modificarOwner(owner: Owner) {
    let body = JSON.stringify({
      accion: 'ModificaOwner',
      owner: owner,
    });
    console.log(body);
    return this.http.post<Owner[]>(this.url, body);
  }

  borrarOwner(ownerId: number) {
    let body = JSON.stringify({
      accion: 'BorraOwner',
      id: ownerId,
      listado: 'OK',
    });
    return this.http.post<Owner[]>(this.url, body);
  }

  obtenerOwnerIdPets(ownerId: number) {
    let body = JSON.stringify({
      accion: 'ObtenerOwnerId_Pets',
      id: ownerId,
    });
    return this.http.post<Owner>(this.url, body);
  }
}
