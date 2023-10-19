import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faNode,
  faAngular,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faGithub = faGithub;
  faNode = faNode;
  faAngular = faAngular;

}
