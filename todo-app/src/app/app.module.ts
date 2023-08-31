import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './todo/components/header/header/header.component';

@NgModule({
  declarations: [TodoComponent, HeaderComponent], // birden chox component oldugu halda burda qeyd edirik
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [TodoComponent], //bir modulu neceki bashlangic olaraq qeyd etdiyimiz kimi, componentlerdende bashlangic olaraq hansinin oldugunu burdan qeyd edirik.
})
export class AppModule {}
