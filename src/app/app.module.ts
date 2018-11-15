import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { SingleUserComponent } from './users/users-list/single-user/single-user.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserService } from './users/users.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UsersListComponent,
    SingleUserComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
