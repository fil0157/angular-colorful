// Angular
import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Project
import { hsvaToHslString } from '../../../utils/convert';
import { HsvaColor } from '../../../interfaces/hsva-color.interface';
import { Interaction } from '../../../interfaces/interaction.interface';



@Component({
  selector: 'hue',
  templateUrl: './hue.component.html',
  styleUrls: ['./hue.component.scss']
})
export class HueComponent implements OnInit, DoCheck {

  @Input() public color: HsvaColor;

  public top: string = '50%';
  public left: string = '';
  public bgColor: string = '';

  constructor() { }

  @Output() onMove = new EventEmitter();

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.f(this.color);
  }

  f(color): void {
    this.left = `${(color.h * 100) / 360}%`;
    this.bgColor = hsvaToHslString({ h: color.h, s: 100, v: 100, a: 1 });
  }

  move($event: Interaction): void {
    this.left = `${$event.left}%`;
    this.color.h = ($event.left * 360) / 100;
    this.onMove.emit(this.color);
  }

}
