import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routes } from './app.router';
import { IndexModule } from './index/index.module';
import { IndexComponent } from './index/index.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AgentModule } from './agent/agent.module';
import { YajmanModule } from './yajman/yajman.module';
import {PanditModule} from './purohit/purohit.module';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IndexModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    AgentModule,
    YajmanModule,
    PanditModule,
    MDBBootstrapModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    MatInputModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule



  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: [Title,{
     useClass: TokenInterceptor,
     provide:HTTP_INTERCEPTORS,
     multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
 