import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // birden chox component oldugu halda burda qeyd edirik
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],  //bir modulu neceki bashlangic olaraq qeyd etdiyimiz kimi, componentlerdende bashlangic olaraq hansinin oldugunu burdan qeyd edirik.
})
export class AppModule {}
