import { Component } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-pet-list',
  imports: [],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css',
})
export class PetListComponent {
  public pets: Pet[] = [];
  public idOwner: number;

  constructor(
    private peticion: PetService,
    private ruta: Router,
    private route: ActivatedRoute
  ) {
    this.idOwner = this.route.snapshot.params['id'];

    if (this.idOwner) {
      this.peticion.listarPets(this.idOwner).subscribe({
        next: (data) => {
          this.pets = data;
          console.log('this.pets', this.pets);
        },
        error: (error) => {
          console.error('Error al cargar las mascotas', error);
        },
      });
    } else {
      console.log('No se ha recibido nada como parámetro');
    }

    console.log('idOwner: ' + this.idOwner);
  }

  irAPetEdit(idPet: number) {
    this.ruta.navigate(['pet-add', this.idOwner, idPet]);
  }
}
