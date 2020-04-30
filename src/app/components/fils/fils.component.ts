import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() couleurPere;
  myFavoriteColor = 'red';
  // créer event
  @Output() sendData = new EventEmitter();
  @Output() sendFavoriteColor = new EventEmitter();
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
  sendMyColor() {
    this.sendFavoriteColor.emit(this.myFavoriteColor);
  }

}
