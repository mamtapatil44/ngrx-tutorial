import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { authLogin, authLogout } from '../../store/auth/auth.actions';
import { selectUser } from '../../store/auth/auth.selectors';
import { Observable } from 'rxjs';
import { User } from '../../store/auth/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user$ : Observable<User | null>
  constructor(private store: Store){
    this.user$ = this.store.select(selectUser);
  }

  Login(){
    this.store.dispatch(authLogin({ username: 'admin', password: 'admin' }))
   
  }

  Logout() {
    this.store.dispatch(authLogout());
  }

}
