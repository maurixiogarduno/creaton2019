import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'card', loadChildren: './card/card.module#CardPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'details/:id', loadChildren: './info-details/info-details.module#InfoDetailsPageModule' },
  { path: 'details', loadChildren: './info-details/info-details.module#InfoDetailsPageModule'},
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'infomodaltab1', loadChildren: './info-modal-tab1/info-modal-tab1.module#InfoModalTab1PageModule' },
  { path: 'infomodaltab1/:id', loadChildren: './info-modal-tab1/info-modal-tab1.module#InfoModalTab1PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
