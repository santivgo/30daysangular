import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuessTheNumber } from "./components/guess-the-number/guess-the-number";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GuessTheNumber],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day5-guessthenumber');
}
