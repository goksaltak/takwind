import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44371/api/brand/getall";
  constructor(private HttpClient:HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>>{
    return this.HttpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
