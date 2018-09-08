import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CustomPipeModule } from './pipe/custom-pipe.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { FrontRoutesModule } from './front/front-routes/front-routes.module';
import { CarewellRoutingModule } from './carewell/carewell-routing/carewell-routing.module';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FrontLayoutComponent } from './front/front-layout/front-layout.component';

import { UserService } from './user.service';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from "angular-6-social-login";

import { UserLoginComponent } from './front/user-login/user-login.component';

import { UserRegisterComponent } from './front/user-register/user-register.component';


import { CarewellLayoutComponent } from './carewell/carewell-layout/carewell-layout.component';
import { CarewellDashboardComponent } from './carewell/carewell-dashboard/carewell-dashboard.component';
import { CarewellProfileComponent } from './carewell/carewell-profile/carewell-profile.component';
import { CarewellPlanComponent } from './carewell/carewell-plan/carewell-plan.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("216088645731820") // developer.facebook.com
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("490702702916-ugf6s2t4em30a407oht7k7jm8va5o02r.apps.googleusercontent.com") // developers.google.com
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    FrontLayoutComponent,

  
    
    
    UserLoginComponent,
    
    UserRegisterComponent,
    
   
    CarewellLayoutComponent,
    CarewellDashboardComponent,
    CarewellProfileComponent,
    CarewellPlanComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FrontRoutesModule,
    CarewellRoutingModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    Ng2GoogleChartsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    DragScrollModule,
    SocialLoginModule,
    BsDropdownModule.forRoot(),
    CustomPipeModule
  ],
  providers: [
    UserService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
