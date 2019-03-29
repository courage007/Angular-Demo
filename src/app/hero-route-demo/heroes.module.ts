import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroListComponent } from './list-component/hero-list.component';
import { HeroDetailComponent } from './card-component/hero-detail.component';

import { HeroesRoutingModule } from './heroes.routing';
import { RouterModule } from '@angular/router';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    // RouterModule,
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule { }
