import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule'
import { SettingsPage } from '../settings/settings'
import { MenuPage } from '../menu/menu'
import { MyProgressPage } from '../my-progress/my-progress'
import { DocumentsPage } from '../documents/documents'
import { MyTeamPage } from '../my-team/my-team'

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})


export class TabsPage {

  DashBoardRoot: any = 'DashboardPage';
  MyProgressRoot: any = 'MyProgressPage';
  MyTeamRoot: any = 'MyTeamPage';
  DocumentsRoot: any = 'DocumentsPage';
  MyHomeRoot: any = 'MyhomePage';
  ScheduleRoot: any ='ScheduleRoot';


  myIndex: number;

  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;

  }
}

