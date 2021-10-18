import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from 'src/app/user';
import { Repository } from 'src/app/repository';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {




  

  CommonUser: User;
  repos: Repository;


  constructor(private http:HttpClient) {
   this.CommonUser = new User (

   '',
   '',
   '',
   '',
   0,
   0,
   0,
   new Date(),


   ),


this.repos = new Repository ('','',new Date(),'')

   }

//get user



  getUserName(gitUsername){
    interface ApiResponse{
      login:string,
      name:string,
       avatar_url:string,
       bio:string,
       public_repos:number,
       followers:number,
       following:number,
       created_at:Date,
    }

    let promise = new Promise <void>((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.BASEURL + '/'+ gitUsername + '??access_token=' + environment.APIKEY).toPromise().then((response)=>{


      this.CommonUser = response;

      resolve()
      },
      (error:any) => {
        reject();
        console.log (error)
      });
    })

    return promise;
  }




getRepositories (gitUsername){
 interface ApiResponse {

   name:string,
   description:string,
   created_at:Date,
   html_Url:string,


 }
let repoPromise = new Promise <void>((resolve,reject)=>{
  this.http.get<ApiResponse>(environment.BASEURL + '/' + gitUsername + '/repos?sort=created&direction=desc??access_token=' + environment.APIKEY).toPromise().then((response)=>{
    this.repos = response
    resolve()
  },
 (error)=>{
   reject(error)
   console.log (error)
 } )
})
return repoPromise

}
}
