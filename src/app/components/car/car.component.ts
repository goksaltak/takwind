import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  currentCar:Car;
  dataLoaded=false;
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if(params["colorId"]){
          this.getCarsByColor(params["colorId"])
        }else if (params["brandId"]){
          this.getCarsByBrand(params["brandId"])
        }else if (params["carId"]){
          this.getCarsDetail(params["carId"])
        } else {
          this.getCars()
        }
      })
  }
  
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getCarsByColor(brandId:number){
    this.carService.getCarsByColor(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getCarsDetail(carId:number){
    this.carService.getCarsDetail(carId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  SetCurrentCarDetail(car:Car){
    this.currentCar=car;
  }

  getCurrentBrandClass(car:Car){
    if (car==this.currentCar){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllBrandClass(){
    if (!this.currentCar){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
