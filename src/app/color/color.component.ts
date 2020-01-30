import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  color = this.defaultColor;
  constructor() { }

  ngOnInit() {
  }

  changeColor(colorInput: HTMLInputElement) {
    this.color = colorInput.value;
    colorInput.value = '';
  }
  resetColor() {
    this.color = this.defaultColor;
  }
}
