import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PropuestaDiaComponent } from './propuesta-dia/propuesta-dia.component';
import { MenuInferiorComponent } from './menu-inferior/menu-inferior.component';
import { NovedadesComponent } from './novedades/novedades.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PropuestaDiaComponent, MenuInferiorComponent, NovedadesComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-companion'
}
