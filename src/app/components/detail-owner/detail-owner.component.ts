import { Component } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../../models/owner';
import { PetListComponent } from '../pet-list/pet-list.component';

@Component({
  selector: 'app-detail-owner',
  imports: [PetListComponent],
  templateUrl: './detail-owner.component.html',
  styleUrl: './detail-owner.component.css',
})
export class DetailOwnerComponent {
  public owner: Owner = <Owner>{};

  constructor(
    private peticion: OwnerService,
    private ruta: Router,
    private route: ActivatedRoute
  ) {
    let idOwner = this.route.snapshot.params['id'];

    if (idOwner) {
      this.peticion.selOwnerId(idOwner).subscribe({
        next: (data) => {
          this.owner = data;
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
      this.peticion.borrarOwner(ownerId).subscribe((data: any) => {
        this.ruta.navigate(['/']);
      });
    }
  }

  editarOwner(ownerId: number) {
    this.ruta.navigate(['owners-add', ownerId]);
  }

  irAPetAdd() {
    // this.ruta.navigate(['pet-add', this.owner.id, -1]);
    this.ruta.navigate(['pet-add'], {
      state: {
        owner: this.owner,
        id: -1,
      },
    });
  }
}
