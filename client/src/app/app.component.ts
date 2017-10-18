import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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
      this.birds = data;
    })
  }

  title = 'BIRDIE APP';
}

class Bird {
  common_name : String
}