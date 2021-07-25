import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostIndexComponent } from './pages/post-index/post-index.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
	{
		path: '',
		component: PostIndexComponent
	},
	{
		path: 'publicaciones',
		component: PostIndexComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '**',
		redirectTo: ''
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
