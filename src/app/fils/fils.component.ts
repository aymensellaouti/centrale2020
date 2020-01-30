import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() couleurPere;
  // créer event
  @Output() sendData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  // il va injecter data
  // emettre l'evenement
  sendDataToFather() {
    this.sendData.emit(
      {name : 'sellaouti', age: 37}
    );
  }

}
