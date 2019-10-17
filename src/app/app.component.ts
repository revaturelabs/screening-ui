import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'screening-ui-gen';
  constructor() {}
}
