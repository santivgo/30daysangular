import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.html',
  styleUrl: './stopwatch.css',
})
export class Stopwatch {

  realTimer: number = 0.00;
  isTimerRunning: boolean = false;
  timerRef: any;

  constructor(private cdr: ChangeDetectorRef) { }


  get timer() {
    return this.realTimer.toFixed(2)
  }

  startOrStopWatch() {
    this.isTimerRunning ? this.stopWatch() : this.startWatch()
  }

  stopWatch() {
    clearInterval(this.timerRef)
    this.isTimerRunning = false;
  }
  startWatch() {
    this.isTimerRunning = true;
    this.timerRef = setInterval(() => {
      this.realTimer += 0.01;
      this.cdr.detectChanges()
    }, 10);
  }

  resetWatch() {
    this.stopWatch()
    this.realTimer = .00
  }



}
