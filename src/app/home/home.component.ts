import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Meta } from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-home',
  template: `
    <h3>{{ message }}</h3>
    <p [innerHtml]="description"></p>
    <div style="float: left; margin: 40px;">
      <img alt="Memco Mobile Shop Logo" [src]="image">
    </div>
    <div>
      We have following brands: <br>
      <ul>
      <li>MI</li>
      <li>Samsung</li>
      <li>IPhone</li>
      <li>Nokia</li>
      <li>RealMe</li>
      <li>Motorola</li>
      <li>Micromax</li>
      <li>Lava</li>
      <li>Karbon</li>
      </ul>
    </div>
  `
})
export class HomeComponent implements OnInit {
  public message = `Memco Mobile Shop`;
  public description = `Memco Mobile Shop is a mobile store.
  We are located in Ahmedabad. <br><br> Our moto is to make our customer as happy as we can by
  providing our branded high quality mobiles at lower rate. To achieve this,
  we are doing our best.<br><br>
  `;
  // tslint:disable-next-line:max-line-length
  public image = 'https://camo.githubusercontent.com/81f72f2fdf98aa1d30b5b215bc8ca9420b249e81/68747470733a2f2f616e67756c61722e696f2f67656e6572617465642f696d616765732f6d61726b6574696e672f636f6e636570742d69636f6e732f756e6976657273616c2e706e67';

  constructor(private http: HttpClient, private meta: Meta) { }

  ngOnInit() {
    // this.getAll()
    // .subscribe(res => {
    //   this.meta.addTag({ name: 'description', content: res.aboutUs.replace(/<[^>]*>/g, '') }, true);
    //   this.meta.addTag({ name: 'keyword', content: res.keywords.join(',') }, true);
    //   this.meta.addTag({ name: 'title', content: `${res.storeName} Shop` }, true);
    //   this.meta.addTag({ name: 'twitter:title', content: `${res.storeName} Shop` }, true);
    //   this.meta.addTag({ name: 'twitter:description', content: res.aboutUs.replace(/<[^>]*>/g, '') }, true);
    //   this.meta.addTag({ name: 'google-site-verification', content: res.googleCode }, true);
    // }, error => {
    // });
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
