import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './commons/header/header.component';

import { AuthService } from './shared/auth.service';
import { UserDataService } from './shared/user-data.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { UsersListComponent } from './dashboard/users-list/users-list.component';
import { BreadCrumbsComponent } from './commons/bread-crumbs/bread-crumbs.component';
import { AddEditModalComponent } from './commons/modals/add-edit-modal/add-edit-modal.component';
import { ConfirmModalComponent } from './commons/modals/confirm-modal/confirm-modal.component';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component';
import { LoadingSpinnerComponent } from './commons/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    UsersListComponent,
    BreadCrumbsComponent,
    AddEditModalComponent,
    ConfirmModalComponent,
    UserDetailsComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    InfiniteScrollModule
  ],
  providers: [AuthService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
