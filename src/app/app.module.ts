import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyOneComponent } from './body-one/body-one.component';
import { BodyTwoComponent } from './body-two/body-two.component';
import { ModalComponent } from './modal/modal.component';
import {ModalService} from './modal.service';
import {BodyThreeComponent} from './body-three/body-three.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyOneComponent,
    BodyTwoComponent,
    BodyThreeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
