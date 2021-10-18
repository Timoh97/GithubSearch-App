import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../services/repositories/repositories.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetails:User;
  repository:any;

  constructor(private repositoriesService:RepositoriesService) {

  };

  getUserDetails (gitUsername: string){

    this.repositoriesService.getUserName(gitUsername).then((response)=>{
     this.userDetails = this.repositoriesService.CommonUser;

    })
  }




  getRepoDetails (gitUsername: string){
this.repositoriesService.getRepositories (gitUsername).then((response)=>{

  this.repository = this.repositoriesService.repos
});
  }





  ngOnInit(): void {
this.getUserDetails('Timoh97')
this.getRepoDetails ("")


  }

}


