import { Component } from '@angular/core';
import { CapacitorCookies } from '@capacitor/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  info = '';
  secure = '';
  constructor() { }

  async ionViewDidEnter() {
    await this.get();
    this.secure = window.isSecureContext ? 'Yes' : 'No';
  }  

  async get() {
    const c = await CapacitorCookies.getCookies();
    this.info = JSON.stringify(c);
    console.log(`Got Cookies: ${this.info}`);
  }

  async clear() {
    console.log(`Clear cookies`);
    await CapacitorCookies.clearAllCookies();
    console.log(`Cookies cleared.`);
  }

  async load() {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/js/piano-analytics.js';
    (window as any)._pac = (window as any)._pac || {};
    //(window as any)._pac.cookieSecure = false;

        script.onload = () => {
      console.log('Loaded the script');
      const pa = (window as any).pa;      
      pa.setConfigurations({
        site: 123456789,        
        addEventURL: "false",
      });    
      console.log('Called set config');


      pa.sendEvent('page.display', // Event name
        {
          'page': 'page name', // Event properties
          'page_chapter1': 'chapter 1',
          'page_chapter2': 'chapter 2',
          'page_chapter3': 'chapter 3'
        }
      );
      console.log('information: pa.sendEvent', pa.getConfiguration('cookieDomain'));
    }

    document.getElementsByTagName('head')[0].appendChild(script);

  }

}
