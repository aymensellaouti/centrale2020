import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'red';
  color;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (mesParams) => {
        console.log(mesParams);
        this.color = mesParams.couleur;
      }
    );
  }

  changeColor(colorInput: HTMLInputElement) {
    this.color = colorInput.value;
    colorInput.value = '';
  }
  resetColor() {
    this.color = this.defaultColor;
  }
}
