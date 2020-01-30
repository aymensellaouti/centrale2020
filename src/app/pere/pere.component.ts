import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  color = 'green';
  constructor() { }

  ngOnInit() {
  }

  processSonMessage(data) {
    alert(`je suis ${data.name} et j'ai ${data.age}`);
  }
}
