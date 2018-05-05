import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { Approutes } from './app-routing.module';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './components/test/test.component';
import { StorageManagerService } from './services/storage-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    HttpModule,
    HttpClientModule
  ],
  providers: [
    StorageManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
