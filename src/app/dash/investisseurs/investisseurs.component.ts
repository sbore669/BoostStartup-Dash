import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { InvestisseursService } from 'src/app/_services/investisseurs.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-investisseurs',
  templateUrl: './investisseurs.component.html',
  styleUrls: ['./investisseurs.component.css']
})
export class InvestisseursComponent implements OnInit {
  allinv: any;

  constructor(private authService: AuthService,
    private storageService: StorageService,
    private investisseursService: InvestisseursService) { }

  ngOnInit(): void {
    this.recupererToutLesInvestisseurs()
  }

  recupererToutLesInvestisseurs(){
    this.investisseursService.listerToutlesunvestisseur().subscribe(data =>{
      this.allinv = data
      console.log(this.allinv)
    })
  }

}
