import { Routes } from '@angular/router';
import { OwnersComponent } from './components/owners/owners.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { DetailOwnerComponent } from './components/detail-owner/detail-owner.component';
import { PetAddComponent } from './components/pet-add/pet-add.component';
import { PettypeListComponent } from './components/pettype-list/pettype-list.component';
import { VisitAddComponent } from './components/visit-add/visit-add.component';

export const routes: Routes = [
  {
    path: '',
    component: OwnersComponent,
  },
  {
    path: 'owners',
    component: OwnersComponent,
  },
  {
    path: 'owner-details/:id',
    component: DetailOwnerComponent,
  },
  {
    path: 'owners-add/:id',
    component: FormOwnerComponent,
  },
  {
    path: 'pet-add/:ownerId/:id',
    component: PetAddComponent,
  },
  {
    path: 'pettypes',
    component: PettypeListComponent,
  },
  {
    path: 'visit-add/:idPet',
    component: VisitAddComponent,
  },
];
