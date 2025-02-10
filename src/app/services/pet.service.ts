import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet';
import { PetType } from '../models/pettype';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private url = environment.API_URL;
  constructor(private http: HttpClient) {}

  listarPets(idOwner: number) {
    let body = JSON.stringify({
      accion: 'ListarPetsOwnerId',
      id: idOwner,
    });
    return this.http.post<Pet[]>(this.url, body);
  }

  anadirPet(pet: Pet) {
    let body = JSON.stringify({
      accion: 'AnadePet',
      pet: pet,
    });
    return this.http.post<Pet>(this.url, body);
  }

  obtenerTipos() {
    let body = JSON.stringify({
      accion: 'ListarPettypes',
    });
    return this.http.post<PetType[]>(this.url, body);
  }

  selPetId(idPet: number) {
    let body = JSON.stringify({
      accion: 'ObtenerPetId',
      id: idPet,
    });
    return this.http.post<any>(this.url, body);
  }
}
