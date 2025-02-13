import { Component, EventEmitter, Output } from '@angular/core';
import { PetType } from '../../models/pettype';
import { PetService } from '../../services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pettype-add',
  imports: [FormsModule],
  templateUrl: './pettype-add.component.html',
  styleUrl: './pettype-add.component.css',
})
export class PettypeAddComponent {
  public textoBoton: string = 'Añadir';
  public petType: PetType = <PetType>{};
  @Output() nuevoPettype = new EventEmitter();

  constructor(
    private peticion: PetService,
    private ruta: Router,
    private route: ActivatedRoute
  ) {
    this.petType = {
      id: -1,
      name: '',
    };
  }

  onSubmit() {
    this.peticion.anadirPettype(this.petType).subscribe({
      next: (data) => {
        this.nuevoPettype.emit(data);
      },
      error: (error) => {
        console.error('Error al modificar el propietario', error);
      },
    });
  }

  cancelar() {}
}
