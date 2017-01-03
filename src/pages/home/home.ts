import { Component } from '@angular/core';
import firebase from 'firebase';
import { LoginPage } from '../login/login';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authService: AuthService) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user) {
        //navCtrl.push(LoginPage);
        navCtrl.setRoot(LoginPage);
      }
    });
  }

  logout() {
    this.authService.doLogout();
  }
}
