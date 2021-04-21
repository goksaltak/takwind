import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImagesService } from 'src/app/services/car-images.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import {BrandService} from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  currentCar:Car;
  filterText="";
  carId: number;
  carImages:CarImage[]=[];
  imageUrl:string="https://localhost:44371"
  dataLoaded=false;
  brands:Brand[]=[];
  colors:Color[]=[];
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute ,private carImagesService : CarImagesService, private brandService:BrandService, private colorService:ColorService) { }

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
      this.getBrands()
      this.getColors()
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
  getImagesByCarId(carId : number){
    this.carImagesService.getByCarId(carId).subscribe((response)=>{
      this.carImages = response.data;
      this.dataLoaded=true;
    });
  }
  
  getCarById(carId : number){
    this.carService.getCarsDetail(carId).subscribe((response)=>{
      this.cars = response.data;
      this.dataLoaded=true;
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
      this.dataLoaded=true;
      
    })
}
getColors(){
  this.colorService.getColors().subscribe(response=>{
    this.colors=response.data
    this.dataLoaded=true;
  })
}
}