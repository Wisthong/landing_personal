import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  faGithub,
  faNode,
  faAngular,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss'],
})
export class CuerpoComponent {
  faGithub = faGithub;
  faNode = faNode;
  faAngular = faAngular;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;
  faNodeJs = faNodeJs;
}
