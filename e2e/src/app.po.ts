import { browser, by, element } from 'protractor';

export class ScreeningPage {
  navigateTo() {
    return browser.get('/#/screening/intro');
  }

  getH1Text() {
    return element(by.css('h1')).getText();
  }
}

export class SettingsPage {
  navigateTo() {
    return browser.get('/#/settings/main');
  }

  getH6Text() {
    return element(by.css('h6')).getText();
  }
}

 export class SettingsBucketPage {
   navigateTo() {
     return browser.get('/#/settings/bucket');
   }

   getBBText() {
     return element(by.css('[routerlink="/settings/main"]')).getText();
   }
 }

export class ScreeningQuestionPage {
  navigateTo() {
    return browser.get('/#/screening/questions');
  }

  getH1Text() {
    return element(by.css('h1')).getText();
  }
}

export class HomePage {
  navigateTo() {
    return browser.get('/#/');
  }

  getH1Text() {
    return element(by.css('h1')).getText();
  }
}

