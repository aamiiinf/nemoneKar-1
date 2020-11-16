import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';

import { PageAsliComponent } from './routes/page-asli/page-asli.component';
import { SingInComponent } from './routes/rigester/sing-in/sing-in.component';
import { SingUpComponent } from './routes/rigester/sing-up/sing-up.component';
import { ShapComponent } from './routes/shap/shap.component';

const appRoutes: Routes = [
  { path: 'main', component: PageAsliComponent},
  { path: 'AdminPanel', component: AdminPanelComponent },
  { path: 'main/sing-up', component: SingUpComponent },
  { path: 'main/sing-in', component: SingInComponent },
  { path: 'main/app-shap', component: ShapComponent },
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
