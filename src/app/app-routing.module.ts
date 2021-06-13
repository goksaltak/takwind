import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"car",component:CarComponent},
  {path:"car/brand/:brandId",component:CarComponent},
  {path:"car/color/:colorId",component:CarComponent},
  {path:"car/cardetails/:carId",component:CardetailsComponent},
  {path:"car/:colorId/:brandId",component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
