import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/site/footer/footer.component';
import { HeaderComponent } from './components/site/header/header.component';
import { DesignKitModule } from './components/designKit/design-kit.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
