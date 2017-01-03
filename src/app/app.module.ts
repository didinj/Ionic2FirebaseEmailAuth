import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetpwdPage } from '../pages/resetpwd/resetpwd';
import { AuthService } from '../providers/auth-service';

export const firebaseConfig = {
  apiKey: "AIzaSyB4TgmhT2AjM7QfeHGhRai6KPSYt4Sd4UM",
  authDomain: "myionic2firebase.firebaseapp.com",
  databaseURL: "https://myionic2firebase.firebaseio.com",
  storageBucket: "myionic2firebase.appspot.com",
  messagingSenderId: "91956654881"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ResetpwdPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ResetpwdPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
