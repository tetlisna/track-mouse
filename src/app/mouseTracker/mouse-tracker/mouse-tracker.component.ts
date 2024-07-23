import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-mouse-tracker',
  standalone: true,
  imports: [],
  templateUrl: './mouse-tracker.component.html',
  styleUrl: './mouse-tracker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MouseTrackerComponent {
  @Output() coordinates = new EventEmitter<{ x: number; y: number }>();

  constructor() {
    fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        throttleTime(1000),
        map((event: MouseEvent) => ({ x: event.clientX, y: event.clientY })),
        distinctUntilChanged(
          (prev, curr) => prev.x === curr.x && prev.y === curr.y
        )
      )
      .subscribe(coords => this.coordinates.emit(coords));
  }
}
