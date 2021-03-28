import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BrandResponseModel} from 'src/app/models/brandResponseModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44371/api/brand/getall";
  constructor(private HttpClient:HttpClient) { }
  getBrands():Observable<BrandResponseModel>{
    return this.HttpClient.get<BrandResponseModel>(this.apiUrl);
  }
}
