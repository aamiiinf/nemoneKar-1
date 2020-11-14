import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';

import { PageAsliComponent } from './components/page-asli/page-asli.component';

const appRoutes: Routes = [
  { path: 'main', component: PageAsliComponent },
  { path: 'AdminPanel', component: AdminPanelComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
