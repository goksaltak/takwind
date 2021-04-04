import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

 
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44371/api/";

  constructor(private HttpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "car/getcarlist"
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "car/getcarsbybrandId?brandId=" + brandId
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number): Observable<ListResponseModel<Car>> {
      let newPath = this.apiUrl + "car/getcarsbycolorid?colorId=" + colorId
      return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }
}
