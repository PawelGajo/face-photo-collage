import { Component, inject, OnInit } from '@angular/core';
import { CollageService } from './collage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private collageService = inject(CollageService);
}
