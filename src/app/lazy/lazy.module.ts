import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-lazy-view',
  template: `
    <h3>About Being Surjeet Store</h3>
    <div>Being Surjeet store is one the best store in Ahmedabad. It is located at SG Highway.
    We are leading clothing store in Ahmedabad. Being Surjeet store has almost all brands
    clothes including Levi, Mufti, Wrangler etc.
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
