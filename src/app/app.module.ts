import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import {FormBuilder, FormGroup, FormControl,ReactiveFormsModule, Validators} from '@angular/forms';

import { NgModule } from '@angular/core';

//PRIME-NG COMPONENTS
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {ColorPickerModule} from 'primeng/colorpicker';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {GMapModule} from 'primeng/gmap';
import { CKEditorModule } from 'ng2-ckeditor';
import {TooltipModule} from 'primeng/tooltip';

//import {EditorModule} from 'primeng/editor';
//import { EditorModule } from '@tinymce/tinymce-angular';

//import { QuillModule } from 'ngx-quill';

//MATERIAL DESIGN
//Material design
import {MatIconRegistry} from '@angular/material';
import {MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule} from '@angular/material';



// NGX-TRANSLATE 
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

//HTTP
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpHeaderInterceptor} from './_library/helpers/http-header-interceptor';
import {ErrorInterceptor} from './_library/helpers/error.interceptor';
import {CustomValidators} from './_library/helpers/custom.validators';
//POPUPS
import { ErrorSheetComponent } from './_library/helpers/error-sheet/error-sheet.component';
import { TermsDialogComponent } from './_auth/terms-dialog/terms-dialog.component';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_auth/login/login.component';
import { TestingComponent } from './_library/testing/testing.component';
import {ApiService} from './_services/api.service';
import { SignupComponent } from './_auth/signup/signup.component';
import {InputImageComponent} from './_library/input-image/input-image.component';
import { NotifsComponent } from './_messaging/notifs/notifs.component';
import { NiceDateFormatPipe } from './_pipes/nice-date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestingComponent,
    ErrorSheetComponent,
    SignupComponent,
    TermsDialogComponent,
    InputImageComponent,
    NotifsComponent,
    NiceDateFormatPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    [PasswordModule, //PRIME-NG modules
    InputTextModule,
    ListboxModule,
    CheckboxModule,
    ButtonModule,
    ColorPickerModule,
    GMapModule,
    TooltipModule,
//    QuillModule,
    CKEditorModule
    ],
    [  MatAutocompleteModule, //MATERIAL2
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatStepperModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule         
    ],    
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
  ],
  entryComponents: [ErrorSheetComponent,TermsDialogComponent],
  providers: [
    HttpClient, ApiService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
    {provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(https: HttpClient) : TranslateHttpLoader {
  return new TranslateHttpLoader(https, './assets/i18n/', '.json');
}
