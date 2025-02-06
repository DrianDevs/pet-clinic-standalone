import { Component } from '@angular/core';
import { Owner } from '../../models/owner';
import { OwnerService } from '../../services/owner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-owner',
  imports: [FormsModule],
  templateUrl: './form-owner.component.html',
  styleUrl: './form-owner.component.sass',
})
export class FormOwnerComponent {
  public owner: Owner = <Owner>{};
  public textoBoton: string;
  constructor(
    private peticion: OwnerService,
    private ruta: Router,
    private route: ActivatedRoute
  ) {
    this.owner = {
      id: -1,
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      telephone: '',
      pets: [],
    };
    this.textoBoton = 'Añadir';
  }

  ngOnInit() {
    const ownerId = this.route.snapshot.params['id'];
    console.log(ownerId);
    if (ownerId == -1) {
      this.textoBoton = 'Añadir';
    } else {
      this.textoBoton = 'Modificar';

      this.peticion.selOwnerId(ownerId).subscribe({
        next: (data) => {
          this.owner = data;
        },
        error: (error) => {
          console.error('Error al cargar la persona', error);
        },
      });
    }
  }

  onSubmit() {
    console.log(this.owner);
    if (this.owner.id == -1) {
      this.peticion.anadirOwner(this.owner).subscribe({
        next: (data: any) => {
          this.ruta.navigate(['/']);
        },
        error: (error) => {
          console.error('Error al añadir el propietario', error);
        },
      });
    } else {
      this.peticion.modificarOwner(this.owner).subscribe({
        next: (data: any) => {
          this.ruta.navigate(['/']);
        },
        error: (error) => {
          console.error('Error al modificar el propietario', error);
        },
      });
    }
  }

  irAtras() {
    this.ruta.navigate(['/']);
  }
}
