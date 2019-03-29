import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';  // import FormsModule to make ngModel attr work

import { AppComponent } from './app.component';
import { CustomInputComponentComponent } from './custom-input-component/custom-input-component.component';
import { BaseComponent } from './extend-component-demo/base.component';
import { ExtendComponent } from './extend-component-demo/extend.component';
import { BaseService } from './extend-component-demo/base.service';
import { ExtendService } from './extend-component-demo/extend.service';
import { AttributeUpdateComponent } from './attribute-update-demo/attribute-update.component';
import { CustomErrorHandler, NotificationService } from './error-handle';
import { LogService } from './error-handle/error-service/log-service';
import { DecoratorDemoComponent } from './decorator-demo/decorator-demo.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroListComponent } from './hero-route-demo/list-component/hero-list.component';
import { HeroesModule } from './hero-route-demo/heroes.module';

@NgModule({
  declarations: [
    DecoratorDemoComponent,
    AppComponent,
    CustomInputComponentComponent,
    BaseComponent,
    ExtendComponent,
    AttributeUpdateComponent,
    NavbarComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HeroesModule
  ],
  providers: [
    LogService,
    NotificationService,
    ExtendService,
    BaseService,
    // https://medium.com/@aleixsuau/error-handling-angular-859d529fa53a
    // 在该Module中，将使用 ErrorHandler 的地方自动替换成 CustomErrorHandler
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    },
  ],
  bootstrap: [AppComponent]
})


@NgModule({

})


export class AppModule { }
