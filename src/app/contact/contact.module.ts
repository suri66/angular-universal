import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-contact-view',
  template: `
    <h3>Get in touch with us</h3>
    <div>
      Voice: 9173283200 <br>
      Email: catchme622@gmail.com <br>
      Address: Being Surjeet Store - 444, SG Highway, Ahmedabad
    </div>
  `
})
export class ContactComponent {}

@NgModule({
  declarations: [ContactComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: ContactComponent, pathMatch: 'full'}
    ])
  ]
})
export class ContactModule {

}
