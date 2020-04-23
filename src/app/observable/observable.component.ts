import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {filter, map, subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  constructor() {
  }
  path = 'cv.png';
  imgObservable: Observable<string>;
  paths = [
    '404.png',
    'as.jpg',
    'cv.png'
  ];
  subscription: Subscription;
  ngOnInit() {
    this.imgObservable = new Observable<string>((observer) => {
      let i = this.paths.length - 1;
      setInterval(() => {
        if (i === -1) {
          i = this.paths.length - 1;
        }
        observer.next(this.paths[i--]);
      }, 1000);
    });
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
    this.subscription = this.imgObservable.subscribe(
      (imgPath) => this.path = imgPath
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
