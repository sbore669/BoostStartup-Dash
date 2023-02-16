import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjetsService } from 'src/app/_services/projets.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-investissements',
  templateUrl: './investissements.component.html',
  styleUrls: ['./investissements.component.css']
})
export class InvestissementsComponent implements OnInit {

  a!:any;
  responsive = true
  mot:any
  projets: any;

  constructor(private projetsService: ProjetsService,
    private router: Router,
    private authService: AuthService,
     private storageService: StorageService,) { }

  ngOnInit(): void {
    this.listertoutlesProjet();
  }

  listertoutlesProjet(){
    this.projetsService.listdesprojets().subscribe(data => {
      this.projets = data;
     console.log(this.projets);
    })
  }

}
