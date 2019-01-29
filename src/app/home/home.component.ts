import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h3>{{ message }}</h3>
    <p [innerHtml]="description"></p>
    <div style="float: left; margin: 40px;">
      <img alt="Being Surjeet Store Logo" [src]="image">
    </div>
    <div>
      We have following brands: <br>
      <ul>
      <li>Levis</li>
      <li>Mufti</li>
      <li>Park Avenue</li>
      <li>Allen Solly</li>
      <li>Provogue</li>
      <li>Lee</li>
      <li>Pepe Jeans</li>
      <li>Wrangler</li>
      <li>Spykar</li>
      </ul>
    </div>
  `
})
export class HomeComponent {
  public message = `Being Surjeet Store`;
  public description = `Being Surjeet Store is a clothing store.
  We are located in Ahmedabad. <br><br> Our moto is to make our customer as happy as we can by
  providing our branded high quality clothes at lower rate. To achieve this,
  we are doing our best.<br><br>
  `;
  // tslint:disable-next-line:max-line-length
  public image = 'https://camo.githubusercontent.com/81f72f2fdf98aa1d30b5b215bc8ca9420b249e81/68747470733a2f2f616e67756c61722e696f2f67656e6572617465642f696d616765732f6d61726b6574696e672f636f6e636570742d69636f6e732f756e6976657273616c2e706e67';

  constructor() { }
}
