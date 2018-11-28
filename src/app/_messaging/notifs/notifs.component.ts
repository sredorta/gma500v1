import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {MatTableDataSource, MatTab} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ApiService, IApiNotif} from '../../_services/api.service';
import {Notif} from '../../_models/notif';
import {User} from '../../_models/user';
import {NiceDateFormatPipe} from '../../_pipes/nice-date-format.pipe';
import {TooltipModule} from 'primeng/tooltip';

@Component({
  selector: 'app-notifs',
  templateUrl: './notifs.component.html',
  styleUrls: ['./notifs.component.scss']
})
export class NotifsComponent implements OnInit {
//  user : User = new User(null);
  loading  : boolean = true;
  dataSource : MatTableDataSource<IApiNotif> = null;          //Store products array in table format
  notifsCount : number = 0;
  displayedColumns: string[] = ['text', 'created_at', 'delete'];
  private _subscriptions : Subscription[] = new Array<Subscription>();
  private _user : User = new User(null);
 
  constructor(private api: ApiService) { }

  ngOnInit() {
    this._subscriptions.push(this.api.getCurrent().subscribe(res=>this._user = res));
    this.loadNotifs();
  }

  loadNotifs() {
    this._subscriptions.push(this.api.getNotifs().subscribe((res:Array<IApiNotif>) => {
      this.dataSource = new MatTableDataSource(res);
      this.notifsCount = res.length;
      this.loading = false;
      console.log(this.dataSource.data.filter(obj => obj.isRead === true));
      this._user.notifications = this.dataSource.data.filter(obj => obj.isRead === true).length;
    }));   
  }


  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data = changes.dataSource.currentValue;
  }
  delete(notif: IApiNotif) {
    this._subscriptions.push(this.api.notificationDelete(notif.id).subscribe((res:Array<IApiNotif>) => {
      this.dataSource = new MatTableDataSource(res);
      this.notifsCount = res.length;
      this.loading = false;
      this._user.notifications = this.dataSource.data.filter(obj => obj.isRead === true).length;      
    }));    
  }

  markRead(notif: IApiNotif) {
    console.log("clicked on markRead notif : ");
    console.log(notif);
    this._subscriptions.push(this.api.notificationMarkRead(notif.id).subscribe((res:Array<IApiNotif>) => {
      this.dataSource = new MatTableDataSource(res);
      this.notifsCount = res.length;
      this.loading = false;
      this._user.notifications = this.dataSource.data.filter(obj => obj.isRead === true).length;      
    }));
  }

  ngOnDestroy() {    
    //Unsubscribe to all
    for (let subscription of this._subscriptions) {
      subscription.unsubscribe();
    }
  }
}
