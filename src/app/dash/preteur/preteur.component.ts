import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PretService } from 'src/app/_services/pret.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-preteur',
  templateUrl: './preteur.component.html',
  styleUrls: ['./preteur.component.css']
})
export class PreteurComponent implements OnInit {
  preteur: any;
  prettotal: any;
  Prettotal: any;

  responsive=true
  searhText: any
  p: number = 1;

  constructor(private router: Router,
    private routes: ActivatedRoute,private storageService: StorageService,private pretService: PretService) { }

  ngOnInit(): void {
    this.recupererPretprojets();
  }

  recupererPretprojets(){
    const idprojet = this.routes.snapshot.params['idprojet'];
    this.pretService.listerlespreteurdunProjet(idprojet).subscribe(data =>{
      this.preteur = data
      for(let text of this.preteur){
        this.Prettotal = text.projets.prettotalobtenu
        console.log('huguiegfuiegfuiegfuiefiuegfieiugfiegfieugfiugeifgirugfiugifug' + text.projets.prettotalobtenu)
      }
      console.log(this.preteur);
    
    })
  }

}
