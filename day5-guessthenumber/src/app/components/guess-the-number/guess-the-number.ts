import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-the-number',
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-the-number.html',
  styleUrl: './guess-the-number.css',
})
export class GuessTheNumber {
  areToo = '';
  foundNumber = false;
  guess!: number;
  realNumber: number = Math.floor(Math.random() * 100)

  @ViewChild('input') inputElementRef!: ElementRef<HTMLInputElement>;

  searchNumber() {
    console.log(this.realNumber)
    if (this.guess > this.realNumber) {
      this.areToo = 'alto'
    } else if (this.guess < this.realNumber) {
      this.areToo = 'baixo'
    } else {
      this.foundNumber = true
    }


  }

  changeGuess(event: string) {
    if (Number.isNaN(event)) {
      this.inputElementRef.nativeElement.value = ''
      return
    }

    const nb = Number(event)

    if (nb < 0) {
      this.guess = 0
    } else if (nb >= 100) {
      this.guess = 99
    } else {
      this.guess = nb
    }
  }

}
