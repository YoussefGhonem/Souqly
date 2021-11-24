import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ManageCategories } from '_models/ManageCategories';

@Injectable({
  providedIn: 'root'
})
export class AdminMCategoriesService {

  constructor(private http: HttpClient) { }


  apiUrl = environment.ApiUrl + "AdminMCategories/";

  getCategories(){
    return this.http.get<ManageCategories[]>(this.apiUrl+"GetCategories");
  }

  Add(cat: ManageCategories){
    return this.http.post(this.apiUrl+"CreateCategory", cat);
  }

  getById(id: number){
    return this.http.get<ManageCategories>(this.apiUrl+"GetById/"+id);
  }

  Update(Id: number, updatedCatName: string){
    return this.http.put(this.apiUrl+"UpdateCategoryName/" +Id+"/"+updatedCatName,{Id,updatedCatName});
  }
}
