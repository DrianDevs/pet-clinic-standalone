import { Component } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { Router, RouterLink } from '@angular/router';
import { Owner } from '../../models/owner';

@Component({
  selector: 'app-owners',
  imports: [RouterLink],
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css',
})
export class OwnersComponent {
  public listaOwners: Owner[] = [];

  constructor(private peticion: OwnerService, private ruta: Router) {
    this.peticion.listarOwners().subscribe((data: any) => {
      this.listaOwners = data;
    });
  }

  borrarOwner(ownerId: number) {
    if (confirm('¿Estás seguro de que quieres borrar a esta persona?')) {
      this.peticion.borrarOwner(ownerId).subscribe((data: any) => {
        this.listaOwners = data;
      });
    }
  }

  editarOwner(ownerId: number) {
    this.ruta.navigate(['owners-add', ownerId]);
  }
}
