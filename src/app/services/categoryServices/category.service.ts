import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/categoryModels/category';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = "https://localhost:44319/api/categories/";
  constructor(private httClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
    let categoriesApiUrl = this.apiUrl + "getcategoryall";
    return this.httClient.get<ListResponseModel<Category>>(categoriesApiUrl);
  }
}
