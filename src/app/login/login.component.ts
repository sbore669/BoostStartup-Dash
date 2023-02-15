import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  // ngOnInit(): void {
  //   if (this.storageService.isLoggedIn()) {
  //     this.isLoggedIn = true;
  //      this.roles[0]=='ROLE_STARTUPS'
  //       this.router.navigateByUrl('/tabs/dashbord-start')
  //     // }
  //   }
  // }
  ngOnInit(): void {
      if (this.storageService.isLoggedIn()) {
      const user = this.storageService.getUser();
      if (user.roles.includes('ROLE_ADMIN')) {
      this.isLoggedIn = true;
      this.router.navigateByUrl('/principal');
      } else {
      this.errorMessage = 'Non autoriser';
    }
  }
}

  onSubmit(): void {
    console.log(this.form);
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {      

        if(data.roles[0]=='ROLE_ADMIN'){
          this.storageService.saveUser(data);
          console.log("===================",data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigate(['/principal']);
        }else{
          this.errorMessage = 'Pas Autoriser ';
          this.isLoginFailed = true;
          
        }

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        // window.location.reload();
        this.router.navigateByUrl("/comptstart")
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
