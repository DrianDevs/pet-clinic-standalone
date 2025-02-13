import { Component } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../../models/owner';
import { PetListComponent } from '../pet-list/pet-list.component';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-detail-owner',
  imports: [PetListComponent],
  templateUrl: './detail-owner.component.html',
  styleUrl: './detail-owner.component.css',
})
export class DetailOwnerComponent {
  public owner: Owner = <Owner>{};

  constructor(
    private peticionOwner: OwnerService,
    private peticionPet: PetService,
    private ruta: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let idOwner = this.route.snapshot.params['id'];

    if (idOwner) {
      this.peticionOwner.selOwnerId(idOwner).subscribe({
        next: (data) => {
          this.owner = data;
          console.log('this.owner', this.owner);
          this.obtenerPets();
        },
        error: (error) => {
          console.error('Error al cargar la persona', error);
        },
      });
    } else {
      console.log('No se ha recibido nada como parámetro');
    }
  }

  irAtras() {
    this.ruta.navigate(['/']);
  }

  borrarOwner(ownerId: number) {
    if (confirm('¿Estás seguro de que quieres borrar a esta persona?')) {
      this.peticionOwner.borrarOwner(ownerId).subscribe((data: any) => {
        this.ruta.navigate(['/']);
      });
    }
  }

  editarOwner(ownerId: number) {
    this.ruta.navigate(['owners-add', ownerId]);
  }

  irAPetAdd() {
    this.ruta.navigate(['pet-add', this.owner.id, -1]);
  }

  obtenerPets() {
    this.peticionPet.listarPets(this.owner.id).subscribe({
      next: (data) => {
        this.owner.pets = data;
      },
      error: (error) => {
        console.error('Error al cargar las mascotas', error);
      },
    });
  }
}
