import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Bird } from '../../bird.model'

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

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

}


