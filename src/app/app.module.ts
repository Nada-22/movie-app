import { SharedComponantsModule } from './components/shared-componants/shared-componants.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { AfterloginGuard } from './guard/afterlogin.guard';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './_helpers/Loader.Interceptor';
import { MaxlengthPipe } from './pipes/maxlength.pipe';
@NgModule({
  declarations: [
    AppComponent,
    // MaxlengthPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedComponantsModule
  ],exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AfterloginGuard,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
