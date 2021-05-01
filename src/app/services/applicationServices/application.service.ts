import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicationdto } from 'src/app/models/applicationModels/applicationdto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private apiUrl = "https://localhost:44319/api/applications/";
  constructor(private httpClient:HttpClient) { }

  getApplications():Observable<ListResponseModel<Applicationdto>>{
    let applicationDtoApiUrl = this.apiUrl + "getdtoall";
    return this.httpClient.get<ListResponseModel<Applicationdto>>(applicationDtoApiUrl);
  }

  getApplicationsByCategory(categoryId:number):Observable<ListResponseModel<Applicationdto>>{
    let getByCateogry = this.apiUrl + "getbycategoryId/" + categoryId;
    return this.httpClient.get<ListResponseModel<Applicationdto>>(getByCateogry);
  }
}
