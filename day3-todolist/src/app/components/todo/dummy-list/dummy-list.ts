import { Component, Input } from '@angular/core';
import { IActivity } from '../../../interfaces/planner.interface';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

registerLocaleData(localeBr, 'pt')

@Component({
  selector: 'app-dummy-list',
  imports: [MatCheckboxModule, CommonModule],
  templateUrl: './dummy-list.html',
  styleUrl: './dummy-list.css',
})
export class DummyList {
  @Input({ 'required': true }) day: string = '';
  @Input({ 'required': true }) activities!: IActivity;



}
