import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from 'src/app/models/applicationModels/application';
import { Applicationdto } from 'src/app/models/applicationModels/applicationdto';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

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

  getApplicationDetail(applicationId:number):Observable<SingleResponseModel<Applicationdto>>{
    let getApplicationDetail = this.apiUrl + "getapplication/" + applicationId;
    return this.httpClient.get<SingleResponseModel<Applicationdto>>(getApplicationDetail);
  }

  setApplicationAdd(application:Application):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "applicationadd",application);
  }
  
}
