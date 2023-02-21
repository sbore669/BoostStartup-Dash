import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from 'src/app/_services/donation.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-donateur',
  templateUrl: './donateur.component.html',
  styleUrls: ['./donateur.component.css']
})
export class DonateurComponent implements OnInit {

  p: number = 1;
  donateur: any;
  donationtot: any;
  responsive=true
  searhText: any

  constructor(private router: Router,
    private routes: ActivatedRoute,private storageService: StorageService,private donationService: DonationService){}

    ngOnInit() {
      this.recupererdonateurprojets();
    }
  
    recupererdonateurprojets(){
      const idprojet = this.routes.snapshot.params['idprojet'];
      this.donationService.listerlesdonnateurdunProjet(idprojet).subscribe(data =>{
        this.donateur = data
        for(let text of this.donateur){
          this.donationtot = text.projets.donationtotalobtenu
          console.log('huguiegfuiegfuiegfuiefiuegfieiugfiegfieugfiugeifgirugfiugifug' + text.projets.prettotalobtenu)
        }
        console.log(this.donateur);
      })
    }

}
