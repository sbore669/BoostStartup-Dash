import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { LoginComponent } from './login/login.component';
import { PrincipaleComponent } from './principale/principale.component';
import { DetailProjetsComponent } from './dash/detail-projets/detail-projets.component';
import { StartupsComponent } from './dash/startups/startups.component';
import { ProjetsComponent } from './dash/projets/projets.component';
import { InvestissementsComponent } from './dash/investissements/investissements.component';
import { InvestisseursComponent } from './dash/investisseurs/investisseurs.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { DonateurComponent } from './dash/donateur/donateur.component';
import { PreteurComponent } from './dash/preteur/preteur.component';
import { ActionnaireComponent } from './dash/actionnaire/actionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    LoginComponent,
    PrincipaleComponent,
    DetailProjetsComponent,
    StartupsComponent,
    ProjetsComponent,
    InvestissementsComponent,
    InvestisseursComponent,
    DonateurComponent,
    PreteurComponent,
    ActionnaireComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
