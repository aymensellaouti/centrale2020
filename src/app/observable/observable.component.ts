import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.pipe(
      map(x => x * 3),
      filter(x => x % 2 === 0)
    ).subscribe((val) => {
      console.log(val);
    });
    observable.subscribe((data) => {
      console.log('Les datas sont : ', data * 2);
    },
      (erreur) => console.log(erreur),
      () => console.log('Fin du compte à rebours')
      );
  }

}
