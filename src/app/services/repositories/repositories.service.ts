import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { HttpClient } from '@angular/common/http';

// @Injectable({providedIn: 'root'})
// export class ServiceNameService {
//   constructor(private httpClient: HttpClient) { }

// }}

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {


  private BaseUrl = environment.BASEURL

  constructor(private httpClient:HttpClient) {

   }

getRepositories (username:string){


  const endpoint = 'users'
  return this.httpClient.get<any[]>(`${this.BaseUrl}/${endpoint}/${username}/repos`,{

  }
  ).toPromise ()
}

}
