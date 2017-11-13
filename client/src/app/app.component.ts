import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Bird } from './bird.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  birds : Bird[]

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() : void {
    this.http.get<Bird[]>('/api/v1/birds').subscribe(data => {
      //this.birds = data;
      this.birds = data.slice(0 ,3);
    })
  }

  title = 'BIRDIE APP';
}
