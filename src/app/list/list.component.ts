import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit{
  memes$: any;
  baseUrl = environment.strapiUrl

  constructor(private dataService: DataService, private http: HttpClient) {
    // this.dataService.getMemes().subscribe((res) => {
    //   this.memes$ = res.data;
    //   console.log(this.memes$);
    // });
  }


  ngOnInit() {
   this.http
      .get<any>(`${environment.strapiUrl}/api/memes?populate=*`)
      .subscribe((res) => {
        this.memes$ = res.data;
        console.log(this.memes$);
      });
  }


}
