import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StartupsService } from 'src/app/_services/startups.service';
import { StorageService } from 'src/app/_services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  startup: any;
  activ: any;
  errr: any;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private startupsService: StartupsService,
    private routes: ActivatedRoute,) { }

  ngOnInit(): void {
    this.RecuperStartupParId();
  }


  RecuperStartupParId() {
    const idUsers = this.routes.snapshot.params['idUsers']
    this.startupsService.listerStartupsParId(idUsers).subscribe(data => {
      this.startup = data
      console.log(this.startup)
    })
  }
  ActiverUneStartupsParID() {
    const idUsers = this.routes.snapshot.params['idUsers']
    this.authService.ActiverUneStartup(idUsers).subscribe(data => {
      this.activ = data
      Swal.fire({
        heightAuto: false,
        icon: 'success',
        text: 'Startup valider avec succès!',
        showConfirmButton: false,
        timer: 2500
      })
      this.RecuperStartupParId();
    }, error => {
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

  RejeterUneStartupsParID() {
    const idUsers = this.routes.snapshot.params['idUsers']
    this.authService.RejeterUneStartups(idUsers).subscribe(data => {
      this.activ = data
      Swal.fire({
        heightAuto: false,
        icon: 'success',
        text: 'Startup rejeter avec succès!',
        showConfirmButton: false,
        timer: 2500
      })
      this.RecuperStartupParId();
    }, error => {
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

}
