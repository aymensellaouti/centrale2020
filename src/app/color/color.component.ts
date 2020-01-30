import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'red';
  color;
  constructor() { }

  ngOnInit() {
    this.color = this.defaultColor;
  }

  changeColor(colorInput: HTMLInputElement) {
    this.color = colorInput.value;
    colorInput.value = '';
  }
  resetColor() {
    this.color = this.defaultColor;
  }
}
