import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
const appRoutes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    {
        path: 'users', component: UsersComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}