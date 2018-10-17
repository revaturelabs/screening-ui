import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/#/screening/intro');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
}

export class SettingsPage {
  navigateTo() {
    return browser.get('/#/screening/home');
  }
 
  getH1Text() {
    return element(by.css('h1')).getText();
  }
 }
