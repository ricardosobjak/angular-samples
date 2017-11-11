import { Routes } from '@angular/router';

import { ContactRoutes } from './contact/index';

//import { LoginComponent } from './login/index';

export const routes: Routes = [
	...ContactRoutes
	//{ path: '**', component: LoginComponent }
];
