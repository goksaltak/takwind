import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImagesService {
  apiUrl = "https://localhost:44371/api/";
  constructor(private httpClient:HttpClient) { }

  getByCarId(carId : number) : Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getimagebycarid?carId=" +carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getAll() : Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getImage(imagePath : string){
    let newpath = this.apiUrl + imagePath;
    return newpath;
  }
}