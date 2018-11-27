import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import {LoginComponent} from './_auth/login/login.component';
import { TranslateService } from '@ngx-translate/core'; //NGS-TRANSLATE
import {User} from './_models/user';
import {ApiService, IApiUserAuth} from './_services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  user : User = new User(null);
  loading : boolean = true;
  private _subscriptions : Subscription[] = new Array<Subscription>();


  color:string;
  constructor(private api: ApiService, private translate: TranslateService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.translate.use("fr");

    //This needs to be moved into config page
    this._subscriptions.push(this.api.getAuthUser().subscribe((res: IApiUserAuth)=> {
      this.api.setCurrent(res); 
    }));

    this._subscriptions.push(this.api.getCurrent().subscribe((res:User) => {
      this.user = res; 
      this.loading = false;
    }));

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);    
  }
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    for (let subscription of this._subscriptions) {
      subscription.unsubscribe();
    }
  }





}
