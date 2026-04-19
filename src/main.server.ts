import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// The pre-renderer needs this context to isolate the build-time DI container
const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;