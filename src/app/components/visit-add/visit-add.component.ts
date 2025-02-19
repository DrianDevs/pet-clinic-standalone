import { Component } from '@angular/core';
import { Visit } from '../../models/visit';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../models/pet';
import { PetService } from '../../services/pet.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-visit-add',
  imports: [DatePipe],
  templateUrl: './visit-add.component.html',
  styleUrl: './visit-add.component.css',
})
export class VisitAddComponent {
  public pet: Pet;
  public visit: Visit;

  constructor(
    private peticion: PetService,
    private ruta: Router,
    private route: ActivatedRoute
  ) {
    this.pet = <Pet>{
      id: this.route.snapshot.params['idPet'],
    };
    this.obtenerPet();
    this.visit = <Visit>{};
  }

  obtenerPet() {
    this.peticion.selPetId(this.pet.id).subscribe({
      next: (data) => {
        this.pet.id = data.id;
        this.pet.name = data.name;
        this.pet.birthDate = data.birthDate;
        this.pet.owner = data.owner;
        this.pet.type = data.type;
      },
      error: (error) => {
        console.error('Error al cargar la mascota', error);
      },
    });
  }
}
