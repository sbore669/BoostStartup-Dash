import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestissementsComponent } from './dash/investissements/investissements.component';
import { InvestisseursComponent } from './dash/investisseurs/investisseurs.component';
import { ProjetsComponent } from './dash/projets/projets.component';
import { StartupsComponent } from './dash/startups/startups.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PrincipaleComponent } from './principale/principale.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, },
  {
    path: "principal", component: PrincipaleComponent,
    children: [
      {path:"",redirectTo:"dashboard",pathMatch:'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'Investissements', component: InvestissementsComponent },
      { path: 'Investisseurs', component: InvestisseursComponent },
      { path: 'projets', component: ProjetsComponent },
      { path: 'Startups', component: StartupsComponent },
      { path: 'pages-login', component: PagesLoginComponent },
      { path: 'pages-register', component: PagesRegisterComponent },
      { path: 'user-profile', component: UsersProfileComponent },
    ]
  },
  // { path: '', component: DashboardComponent },


  { path: "", redirectTo: "login", pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }