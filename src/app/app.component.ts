import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from './services/repositories/repositories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Timm';
  username = 'Timoh97'
  repositories:any[] = []
  isLoading = true

  constructor (private repositoriesService:RepositoriesService){

  }
  ngOnInit(): void {
   this.getPublicRepositories ();
  }

  getPublicRepositories (){
    return this.repositoriesService.getRepositories (this.username).then((response:any[])=>{
      // console.log(response)
      this.repositories = response
    }).catch ((error)=>{

console.log (error)

    }).finally(()=>{
this.isLoading = false
    })
  }
}
