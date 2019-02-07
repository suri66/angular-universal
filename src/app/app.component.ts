import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  styleUrls:['app.component.css'],
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient, private meta: Meta) { }

  ngOnInit() {
    console.log('hererer');
    this.getAll()
    .subscribe(res => {
      this.meta.addTag({ name: 'description', content: res.aboutUs.replace(/<[^>]*>/g, '') }, true);
      this.meta.addTag({ name: 'keyword', content: res.keywords.join(',') }, true);
      this.meta.addTag({ name: 'title', content: `${res.storeName} Shop` }, true);
      this.meta.addTag({ name: 'twitter:title', content: `${res.storeName} Shop` }, true);
      this.meta.addTag({ name: 'twitter:description', content: res.aboutUs.replace(/<[^>]*>/g, '') }, true);
      this.meta.addTag({ name: 'google-site-verification', content: res.googleCode }, true);
    }, error => {
    });
  }

  getAll(): Observable<any> {
    return this.http.
    get(`https://develop.new-backend.trackwalkins.com/v3/businesses/get-store-config-public?ePageDomain=http://suristore.wlkn.in`).pipe(
      map(res => {
        return res;
      })
    );
  }
}
