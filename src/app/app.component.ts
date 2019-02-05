import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  template: `
  <div class="app-container">
    <h1>Memco Mobile Shop</h1>
    <nav class="nav-links">
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/contact">Contact</a>
    </nav>
    <div class="router-container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styles: [`
    :host {
      background: #f1f1f1;
      font-family: Roboto,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
      font-display: swap;
    }
    .nav-links {
      background: #008591;
    }
    .nav-links a {
      color: #fff;
      display: inline-block;
      padding: 1rem;
      margin-right: 3rem;
      text-decoration: none;
      font-weight: bold;
      letter-spacing: 0.1rem;
    }
    .router-container {
      border: 0.5rem #00afc4 solid;
      padding: 2rem;
    }
  `]
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
