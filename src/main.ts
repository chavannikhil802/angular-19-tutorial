import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NewAppRootComponent } from './app/new-app-root/new-app-root.component';

bootstrapApplication(NewAppRootComponent, appConfig)
  .catch((err) => console.error(err));
