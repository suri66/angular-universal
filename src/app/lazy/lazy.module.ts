import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-lazy-view',
  template: `
    <h3>About Memco Mobile Shop</h3>
    <div>Memco Mobile Shop is one the best shop in Ahmedabad. It is located at SG Highway.
    We are leading mobile shop in Ahmedabad. Memco Mobile Shop has almost all brands
    mobiles including MI, Samsung, IPhone etc.
    </div>
  `
})
export class LazyComponent {}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {

}
