import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Bird } from '../bird.model'

@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.css']
})
export class JournalPageComponent implements OnInit {

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

}