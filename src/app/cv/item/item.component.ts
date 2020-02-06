import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Models/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectPersonne = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  sendPersonne() {
    this.selectPersonne.emit(
      this.personne
    );
  }
}
