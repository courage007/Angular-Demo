import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeUpdateComponent } from './attribute-update-demo/attribute-update.component';
import { APP_ROUTE_PATH } from './app-routing-path';
import { HeroListComponent } from './hero-route-demo/list-component/hero-list.component';

// import { ComposeMessageComponent }  from './compose-message/compose-message.component';
// import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

// import { AuthGuard }                          from './auth/auth.guard';
// import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  // {
  //   path: 'attributes',
  //   component: AttributeUpdateComponent,
  //   outlet: 'popup'
  // },
  { // 组件
    path: APP_ROUTE_PATH.heroes,
    component: HeroListComponent
  }
  // {
  //   path: 'heroes',
  //   loadChildren: './hero-route-demo/heroes.module#HeroesModule'
  // },
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  // {
  //   path: '**',
  //   loadChildren: './hero-route-demo/heroes.module#HeroesModule',
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
