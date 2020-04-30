import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (posts) => console.log(posts),
      (error) => console.log(error)
    );
  }

  addUser() {
    const newElement = {
      title: 'new Post',
      body: 'Central new post',
      userId: 1
    };

    this.http.post('https://jsonplaceholder.typicode.com/posts', newElement).subscribe(
      (response) => console.log(response)
    );
  }
}
