import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionService } from 'src/app/_services/action.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-actionnaire',
  templateUrl: './actionnaire.component.html',
  styleUrls: ['./actionnaire.component.css']
})
export class ActionnaireComponent implements OnInit {

  actionnaire: any;
  actrest: any;

  responsive=true
  searhText: any
  p: number = 1;

  constructor(private router: Router,
    private routes: ActivatedRoute,private storageService: StorageService,private actionService: ActionService) { }

    ngOnInit() {
      // this.recupererProjetStartups();
      this.recupererActionprojets();
    }
  
    recupererActionprojets(){
      const idprojet = this.routes.snapshot.params['idprojet'];
      this.actionService.listerlesActionnairedunProjet(idprojet).subscribe(data =>{
        this.actionnaire = data
        for(let text of this.actionnaire){
          this.actrest = text.projets.action_restante
          console.log('huguiegfuiegfuiegfuiefiuegfieiugfiegfieugfiugeifgirugfiugifug' + text.projets.prettotalobtenu)
        }
        console.log(this.actionnaire);
      })
    }

}
