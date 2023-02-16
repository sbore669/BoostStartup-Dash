import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjetsService } from 'src/app/_services/projets.service';
import { StartupsService } from 'src/app/_services/startups.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {
  startupss: any;
  allStart: any;

  constructor(private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private route : ActivatedRoute,
    private projetsService: ProjetsService,
    private startupsService: StartupsService,) { }

  ngOnInit(): void {
    this.recupererToutlesSTartups();
  }

  recupererlesStartupValide(){
    this.startupsService.listzeAllStartupsValide().subscribe(data =>{
      this.startupss = data;
      console.log(this.startupss)
    })
  }
  recupererToutlesSTartups(){
    this.startupsService.listerAllStartups().subscribe(data =>{
      this.allStart = data;
      console.log(this.allStart)
    })
  }
  

}
