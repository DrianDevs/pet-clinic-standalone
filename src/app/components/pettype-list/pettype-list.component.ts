import { Component } from '@angular/core';
import { PetType } from '../../models/pettype';
import { PetService } from '../../services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PettypeAddComponent } from '../pettype-add/pettype-add.component';

@Component({
  selector: 'app-pettype-list',
  imports: [PettypeAddComponent],
  templateUrl: './pettype-list.component.html',
  styleUrl: './pettype-list.component.css',
})
export class PettypeListComponent {
  public pettypes: PetType[] = [];

  constructor(
    private peticion: PetService,
    private ruta: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.obtenerPetTypes();
  }

  obtenerPetTypes() {
    this.peticion.listarPettypes().subscribe({
      next: (data) => {
        this.pettypes = data;
        console.log('data', data);
      },
      error: (error) => {
        console.error('Error al cargar los tipos de mascotas', error);
      },
    });
  }
}
