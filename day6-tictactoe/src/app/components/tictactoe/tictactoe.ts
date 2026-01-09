import { Component } from '@angular/core';
import { gameType } from '../../types/game-type.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tictactoe',
  imports: [CommonModule],
  templateUrl: './tictactoe.html',
  styleUrl: './tictactoe.css',
})
export class Tictactoe {
  private tableGame: gameType[][] = this.populateArray();
  private turn: boolean = false;
  turnNumber: number = 0;
  private actualElement: 'O' | 'X' = this.getActualElement();
  protected ended: boolean = false;
  protected draw: boolean = false;

  initializeItems() {
    this.turn = false;
    this.turnNumber = 0;
    this.tableGame = this.populateArray();
    this.actualElement = this.getActualElement();
    this.ended = false;
  }

  populateArray(): gameType[][] {
    const myArray: gameType[][] = []
    for (let i = 0; i < 3; i++) {
      myArray[i] = []
      for (let j = 0; j < 3; j++) {
        myArray[i][j] = ''
      }
    }

    return myArray;
  }
  winDiagonal(): boolean {

    for (let diag = 0; diag < 2; diag++) {
      if (!this.tableGame[diag][diag]) return false
      if (this.tableGame[diag][diag] !== this.tableGame[diag + 1][diag + 1]) {
        return false
      };
    }
    return true
  }

  winSecDiagonal(): boolean {
    let diagSec = 2
    for (let diag = 0; diag < 2; diag++) {
      if (!this.tableGame[diag][diagSec]) return false;
      if ((this.tableGame[diag][diagSec] !== this.tableGame[diag + 1][diagSec - 1])) return false;
      diagSec--;
    }

    return true
  }

  winRow(): boolean {
    return this.tableGame.some((row) =>
      row.every((value) => value === 'X') || row.every((value) => value === 'O'))
  }
  winDiagonals(): boolean {
    return this.winDiagonal() || this.winSecDiagonal();
  }
  winCol(): boolean {
    for (let col = 0; col < 3; col++) {
      const firstColItem = this.tableGame[0][col]
      if (!firstColItem) continue
      if (firstColItem === this.tableGame[1][col] && firstColItem === this.tableGame[2][col]) {
        return true
      }
    }
    return false
  }


  winOrNah() {
    console.log(this.turnNumber)

    if (this.winDiagonals() || this.winRow() || this.winCol()) {
      this.ended = true
    } else if (this.turnNumber === 8) {
      this.ended = true
      this.draw = true;
    }

  }
  markOrWin(row: string, col: string): void {
    const [Nrow, Ncol] = [Number(row), Number(col)];
    this.tableGame[Nrow][Ncol] = this.getActualElement()
    this.winOrNah()

  }


  getActualElement(): 'X' | 'O' {
    return this.turn === false ? 'X' : 'O'
  }

  changeTurn() {
    this.turnNumber++;
    this.turn = !this.turn;
    this.actualElement = this.getActualElement();
  }

  teste(event: PointerEvent) {
    if (!this.ended) {
      if (!(event.target instanceof HTMLButtonElement)) return;
      const actualButton: HTMLButtonElement = event.target as HTMLButtonElement;

      if (actualButton.textContent === '') {
        const [row, col] = [actualButton.getAttribute('row'), actualButton.getAttribute('col')]
        this.markOrWin(row!, col!)
        this.changeTurn()
        actualButton.textContent = this.actualElement
      } else {
        return
      }
    }

  }
}
