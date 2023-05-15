import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getMemes() {
    return this.http
      .get(`${environment.strapiUrl}/api/memes?populate=*`)
      .pipe(map((res: any) => res.data));

  }

  // map((memes: Root[]) => {
  //  return memes.map((meme)=> {
  //   meme.attributes.image.data.attributes.url = `${environment.strapiUrl}${meme.attributes.image.data.attributes.url}`
  //   console.log(meme);

  //  })
  // })

 
}
