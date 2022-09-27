import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MainContainerModule } from './main-container/main-container.module';
import{DesignUtilityService} from './appServices/design-utility.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainContainerModule
  ],
  providers: [DesignUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
