import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyOneComponent } from './body-one/body-one.component';
import { BodyTwoComponent } from './body-two/body-two.component';
import { ModalComponent } from './modal/modal.component';
import {ModalService} from './modal.service';

@NgModule({
  declarations: [
    AppComponent,
    BodyOneComponent,
    BodyTwoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
