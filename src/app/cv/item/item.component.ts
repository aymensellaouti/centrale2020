import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Models/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  // @Output() selectPersonne = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }
  ngOnInit() {
  }
  sendPersonne() {
    this.cvService.selectPersonne(this.personne);
    // this.selectPersonne.emit(
    //   this.personne
    // );
  }
}
