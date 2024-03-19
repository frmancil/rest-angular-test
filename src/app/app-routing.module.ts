import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestTestComponent } from './rest-test/rest-test.component'

const routes: Routes = [
  { path: '', component: RestTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
