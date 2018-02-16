import { SchedulePage } from './../schedule/schedule'
import { SettingsPage } from './../settings/settings'
import { ToDoListPage } from './../to-do-list/to-do-list'
import { TutorialPage } from './../tutorial/tutorial'
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { MenuController} from 'ionic-angular'
import {ViewChild, } from '@angular/core'

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon?: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Schedule', pageName: 'SchedulePage',  icon: 'calendar', },
    { title: 'Settings', pageName: 'SettingsPage',  icon: 'cog' },
    { title: 'To-Do List', pageName: 'ToDoListPage', icon: 'clipboard'},
    { title: 'Tutorial', pageName: 'TutorialPage', icon: 'help-circle'},





  ];
  tabpages: PageInterface [] = [

    { title: 'Dashboard', pageName: 'TabsPage',  tabComponent: 'DashboardPage', index: 0, icon: 'analytics' },
    { title: 'My Progress', pageName: 'TabsPage',  tabComponent: 'MyprogressPage', index: 1,  icon: 'speedometer'},
    { title: 'My Team', pageName: 'TabsPage',  tabComponent: 'MyteamPage', index: 2,  icon: 'contact' },
    { title: 'My Home', pageName: 'TabsPage',  tabComponent: 'MyhomePage', index: 3,  icon: 'home'},
    { title: 'Documents', pageName: 'TabsPage',  tabComponent: 'DocumentsPage', index: 4,  icon: 'copy'},
  ]

  constructor(public navCtrl: NavController) { }

  getActiveChildNav(pageName){
  console.log(pageName);
}
  openPage(page: PageInterface) {
    let params = {};
console.log(page.pageName)
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);

    } else {
      // Tabs are not active, so reset the root page
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
      console.log(page.pageName)
    }
  }

  isActive(page: PageInterface, istab: boolean) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';

      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  navTo(page){
    this.navCtrl.setRoot(page);
  }



}
