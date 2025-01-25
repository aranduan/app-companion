import { Component, HostListener, OnInit } from '@angular/core';
  import { RouterLink, RouterLinkActive } from '@angular/router';
 import { CommonModule } from '@angular/common';

 @Component({
    selector: 'app-header',
    standalone: true,
   imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})
 export class HeaderComponent implements OnInit {
    windowWidth: number = 0;

    ngOnInit(): void {
       if (typeof window !== 'undefined') {
         this.windowWidth = window.innerWidth;
        }
    }
 // Escuchar cambios en el tamaño de la ventana
   @HostListener('window:resize', ['$event'])
   onResize(event: Event) {
    if (typeof window !== 'undefined') {
       this.windowWidth = (event.target as Window).innerWidth;
      }
   }
  }
  