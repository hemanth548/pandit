import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { CountdownModule } from 'ngx-countdown';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgxLoadingModule } from 'ngx-loading';
import { TypingAnimationDirective } from 'angular-typing-animation'
import {AutocompleteLibModule} from 'angular-ng-autocomplete';








@NgModule({
  declarations: [LoginComponent,AdminloginComponent,TypingAnimationDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    AutocompleteLibModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    MatBottomSheetModule,
    MDBBootstrapModule,
    MatTabsModule,
    MatIconModule,
    CountdownModule,
    RouterModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({
        backdropBackgroundColour: 'rgba(0,0,0,0.5)', 
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff', 
        secondaryColour: '#ffffff', 
        tertiaryColour: '#ffffff'
    })
  ],
  entryComponents: [
    AdminloginComponent
],



  
})
export class IndexModule { }