import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarImagesService } from 'src/app/services/car-images.service';
import { ToastrService } from 'ngx-toastr';
import { VirtualTimeScheduler } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {
  cars: Car[] = [];
  carId: number;
  carImages: CarImage[] = [];
  imageUrl: string = "https://localhost:44371"
  dataLoaded = false;
  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private carImagesService: CarImagesService, private toastrService:ToastrService
    , private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarById(params['carId']);
      this.getImagesByCarId(params['carId'])
    })
  }

  getImagesByCarId(carId: number) {
    this.carImagesService.getByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }

  getCarById(carId: number) {
    this.carService.getCarsDetail(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  addToCart(car: Car) {
    this.toastrService.success("Sepete eklendi.",car.description)
    this.cartService.addToCart(car);
  }
}
