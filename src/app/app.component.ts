import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//import { TreeComponent } from './tree/tree.component';
//import { ScrollPanelsComponent } from './scrollpanels/scrollpanels.component';
import { ProfileSectionsModule } from './profile-sections.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProfileSectionsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'pedroangelalvarez.github.io';
}
