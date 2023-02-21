import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { InvestisseursService } from 'src/app/_services/investisseurs.service';
import { ProjetsService } from 'src/app/_services/projets.service';
import { StartupsService } from 'src/app/_services/startups.service';
import { StorageService } from 'src/app/_services/storage.service';
import { TypeprojetsService } from 'src/app/_services/typeprojets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  p: number = 1;
  collection: any;
  nomtype: any;
  typesProjet: any;
  totalObtnu: any;
  totalStartups: any;
  totalInvestisseurs: any;
  totalprojets: any;
  totalprets: any;
  totalDon: any;
  modff: any;
  id: any
  nomm: any;
  responsive=true
  searhText: any

  idprojet:any;
  unType: any;
  nntype: any;

  form:any={
    nomtype:''
  }
  errr: any;

  constructor(private elementRef: ElementRef,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private route : ActivatedRoute,
    private projetsService: ProjetsService,
    private startupsService: StartupsService,
    private investisseursService: InvestisseursService,
    private typeprojets: TypeprojetsService,) { }

  ngOnInit(): void {

    this.idprojet = this.route.snapshot.params["Idtypeprojets"];
    
    

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
    //les recuperation
    this.listerTyperdeprojet();
    this.MontantTotalObtenu();
    this.NombreTotaoldeStartups();
    this. NombreTotalInvestisseurs();
    this.NombreTotalDeprojets();
    this.MontantTotaldespret();
    this.MontantTotaldesDOnation();
  }
  listerTyperdeprojet(){
    this.typeprojets.listetypeprojets().subscribe(data => {
    this.typesProjet = data

    this.nomm = this.typesProjet.nomtype
  //  console.log(data)
  })

  }

  onSubmit(){
    
    this.typeprojets.AjouterTypeprojets(this.nomtype).subscribe(res =>{
      console.log(res);
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          text: 'Projet créé avec succès',
          showConfirmButton: false,
          timer: 2500
        })
        this.listerTyperdeprojet();
    },error => {
      this.errr = error
     // this.message = error.message
      console.log(error);
      Swal.fire({
        heightAuto: false,
        icon: 'error',
        text: this.errr.error.message,
        showConfirmButton: false,
        timer: 2500
      })
    });
  }

  Modifiertypedeprojet(Idtypeprojets:number){
    var typ=[{
      'nomtype':this.form.nomtype
    }]
    console.log('id de '+ this.form.nomtype);
    console.log( typ);
    this.typeprojets.ModifiereTypeprojets(Idtypeprojets,typ).subscribe((data) =>{
      this.modff = data
      Swal.fire({
        heightAuto: false,
        icon: 'success',
        text: 'Type de projets modifier avec succès',
        showConfirmButton: false,
        timer: 2500
      })
      this.listerTyperdeprojet();
    },error => {
      this.errr = error
     // this.message = error.message
      console.log(error);
      Swal.fire({
        heightAuto: false,
        icon: 'error',
        text: this.errr.error.message,
        showConfirmButton: false,
        timer: 2500
      })
    });
  };
  getUnType(Idtypeprojets:any){
   this.typeprojets.listeUnSeultypeprojets(Idtypeprojets).subscribe(data =>{
    this.unType = data
    this.nntype = this.unType.nomtype
   })
  }
  MontantTotalObtenu(){
    this.projetsService.TotalObtenusurToutprojets().subscribe(data => {
      this.totalObtnu = data;
    // console.log(data);
    })
  }
  NombreTotaoldeStartups(){
    this.startupsService.NombreStartups().subscribe(data =>{
      this.totalStartups = data;
    })
  }
  NombreTotalInvestisseurs(){
    this.investisseursService.totalInvestisseurs().subscribe(data =>{
      this.totalInvestisseurs = data
    })
  }
  //Nombre total des Projets
  NombreTotalDeprojets(){
    this.projetsService.nombretotaldeprojets().subscribe(data =>{
      this.totalprojets = data
    })
  }
  //Total des Pret
  MontantTotaldespret(){
    this.projetsService.montantTotaldespret().subscribe(data =>{
      this.totalprets = data
    })
  }
  //Montant total des donnation
  MontantTotaldesDOnation(){
    this.projetsService.montantTotalDonation().subscribe(data =>{
      this.totalDon = data
    })
  }

}
