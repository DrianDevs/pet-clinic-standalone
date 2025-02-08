import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pet } from '../../models/pet';
import { PetService } from '../../services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PetType } from '../../models/pettype';
import { Owner } from '../../models/owner';

@Component({
  selector: 'app-pet-add',
  imports: [FormsModule],
  templateUrl: './pet-add.component.html',
  styleUrl: './pet-add.component.css',
})
export class PetAddComponent {
  public textoBoton: string;
  public pet: Pet = <Pet>{};
  public tipos: PetType[] = [];

  constructor(
    private peticion: PetService,
    private ruta: Router,
    private route: ActivatedRoute
  ) {
    this.textoBoton = 'Añadir';
    this.pet = {
      id: -1,
      name: '',
      birthDate: '',
      type: {
        id: -1,
        name: '',
      },
      //Falta llenar los datos del owner
      owner: <Owner>{},
      visits: [],
    };
  }

  ngOnInit() {
    const state = this.ruta.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.pet.owner = state['owner'];
      this.pet.id = state['id'];
      console.log(this.pet.owner);
    }
    this.obtenerTipos();
  }

  onSubmit() {
    const petId = this.route.snapshot.params['id'];
    if (petId == -1) {
      this.textoBoton = 'Añadir';

      this.peticion.anadirPet(this.pet).subscribe({
        next: (data) => {
          this.ruta.navigate(['/owner-details', this.pet.owner.id]);
        },
        error: (error) => {
          console.error('Error al añadir la mascota', error);
        },
      });
    } else {
      this.textoBoton = 'Modificar';

      // Añadir aqui el modificar pet
    }
  }

  obtenerTipos() {
    this.peticion.obtenerTipos().subscribe({
      next: (data) => {
        this.tipos = data;
      },
      error: (error) => {
        console.error('No se han podido obtener los tipos', error);
      },
    });
  }

  irAtras() {
    this.ruta.navigate(['/owner-details', this.pet.owner.id]);
  }
}
