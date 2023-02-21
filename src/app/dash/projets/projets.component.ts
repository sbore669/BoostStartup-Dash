import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ProjetsService } from 'src/app/_services/projets.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projets: any;
  p: number = 1;
  responsive=true
  searhText: any

  constructor(private route: Router,
    private projetsService: ProjetsService,
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
