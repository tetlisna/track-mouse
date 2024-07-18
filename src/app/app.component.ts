import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MouseTrackerComponent } from './mouseTracker/mouse-tracker/mouse-tracker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MouseTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  tracking: boolean = false;
  x: number = 0;
  y: number = 0;

  toggleTracking() {
    this.tracking = !this.tracking;
  }

  updateCoordinates(coords: { x: number; y: number }) {
    if (this.tracking) {
      this.x = coords.x;
      this.y = coords.y;
    }
  }

  title = 'track-mouse';
}
