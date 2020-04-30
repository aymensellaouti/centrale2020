import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  isHidden = false;
  color = 'blue';
  constructor() { }

  ngOnInit() {
  }
  sayCc(para) {
    console.log(para);
    alert('cc');
  }

}
