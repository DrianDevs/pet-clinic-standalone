import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visit-list',
  imports: [],
  templateUrl: './visit-list.component.html',
  styleUrl: './visit-list.component.css',
})
export class VisitListComponent {
  @Input() visits: any[] = [];

  ngOnChanges() {
    if (this.visits && this.visits.length > 0) {
      console.log(this.visits);
    }
  }
}
