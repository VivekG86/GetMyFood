import { Routes } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { ConfirmComponent } from './confirm/confirm.component';

export const appRoutes: Routes = [
    { path: 'Login', component: LoginComponent },
    { path: 'Home/:username', component: HomeComponent },
    { path: 'Menu/:username', component: MenuComponent },
    { path: 'Order', component: OrderComponent },
    { path: 'Confirm', component: ConfirmComponent },
    { path: '', redirectTo: '/Login', pathMatch: 'full' }
  ];