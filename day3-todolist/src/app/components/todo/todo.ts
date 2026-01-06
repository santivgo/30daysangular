import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DummyList } from './dummy-list/dummy-list';
import { daysOfWeekMap } from '../../utils/maps/days-of-week.map';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  imports: [MatTabsModule, DummyList, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  get daysOfWeek() {
    return Object.values(daysOfWeekMap)
  }

  get weekDay() {
    return new Date().getDay() - 1
  }


}
