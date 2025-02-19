import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { VisitListComponent } from '../visit-list/visit-list.component';

@Component({
  selector: 'app-pet-list',
  imports: [DatePipe, RouterLink, VisitListComponent],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css',
})
export class PetListComponent {
  @Input() pet: any = {};

  constructor() {}
}
