import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day2-counter');
  contador = 0;

  increment() {
    this.contador++
  }
  decrement() {
    this.contador--
  }
  getActualStatus() {
    return this.contador > 0 ? 'positivo' : this.contador === 0 ? 'neutro' : 'negativo'
  }
}
