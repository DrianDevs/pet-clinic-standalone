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
  public textoBoton: string = 'Añadir';
  public pet: Pet = <Pet>{};
  public tipos: PetType[] = [];

  constructor(
    private peticion: PetService,
    private ruta: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pet = {
      id: this.route.snapshot.params['id'],
      name: '',
      birthDate: '',
      type: <PetType>{},
      owner: <Owner>{
        id: this.route.snapshot.params['ownerId'],
      },
      visits: [],
    };

    if (this.route.snapshot.params['id'] == -1) {
      this.textoBoton = 'Añadir';
    } else {
      this.textoBoton = 'Modificar';

      this.pet.id = this.route.snapshot.params['id'];
      this.obtenerDatosPet();
    }

    this.obtenerTipos();
  }

  onSubmit() {
    if (this.pet.id == -1) {
      console.log(this.pet);
      this.peticion.anadirPet(this.pet).subscribe({
        next: (data) => {
          this.ruta.navigate(['/owner-details', this.pet.owner.id]);
        },
        error: (error) => {
          console.error('Error al añadir la mascota', error);
        },
      });
    } else {
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

  obtenerDatosPet() {
    this.peticion.selPetId(this.pet.id).subscribe({
      next: (data) => {
        console.log('data', data);
        this.pet.name = data.name;
        this.pet.birthDate = data.birthDate;
        this.pet.type = data.type;
        this.pet.owner = data.owner;
        console.log('this.pet', this.pet);
      },
      error: (error) => {
        console.error('Error al obtener la mascota', error);
      },
    });
  }
}
