import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule) //program ishe dushduyu an bashlangic module olaraq AppModule gorsensin deye bura qeyd edirik(yeni ekranda ilk bu gorsensin)
  .catch((err) => console.error(err));
