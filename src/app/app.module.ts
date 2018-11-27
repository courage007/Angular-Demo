import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //import FormsModule to make ngModel attr work

import { AppComponent } from './app.component';
import { CustomInputComponentComponent } from './custom-input-component/custom-input-component.component';
import { BaseComponent } from './extend-component-demo/base.component';
import { ExtendComponent } from './extend-component-demo/extend.component';
import { BaseService } from './extend-component-demo/base.service';
import { ExtendService } from './extend-component-demo/extend.service';
import { AttributeUpdateComponent } from './attribute-update-demo/attribute-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponentComponent,
    BaseComponent,
    ExtendComponent,
    AttributeUpdateComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    ExtendService,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
