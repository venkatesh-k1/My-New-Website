import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponet } from './properties/property-card/property-card.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PropertyCardComponet,PropertyListComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-application';
}
