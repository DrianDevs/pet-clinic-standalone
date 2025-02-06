import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet';

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
}
