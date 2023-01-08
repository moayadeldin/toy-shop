import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [

  {

    path:'',
    component:FirstPageComponent

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
  {path:'welcome',component:FirstPageComponent},
  {path: '**', component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
