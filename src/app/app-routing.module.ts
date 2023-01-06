import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [

  {

    path:'',
    component:HomeComponent

  },

  {

    path: 'home',
    component:HomeComponent,

  },
  {
    path:'payment',
    component:PaymentComponent


  },
  {
    path:'payment/success',
    component:SuccessComponent

  },
  {path: '**', component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
