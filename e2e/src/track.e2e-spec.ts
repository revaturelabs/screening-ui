import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {

    it('click on tab2 and populate list group item', function() {
        browser.get('http://localhost:4200/#/settings/main');
        element(by.id('tab-2')).click();
        element(by.id('penIcon')).click();
        element.all(by.css('.pillButtons')).click();
        expect(element(by.id('font-fix')).getText()).toContain('Java Applied');
      });

      it('Settings/Main, click on tracks tab, ', function() {
        browser.get('http://localhost:4200/#/settings/main');
        element(by.id('tab-2')).click();// tracks tab
        element.all(by.css('btn')).get(0).click(); //create new track
        element(by.id('title')).sendKeys('Track Naming Skills');
        element.all(by.css('fa-pencil-alt')).get(1).click();
        expect(element.all(by.css('.list-group-item')).get(0).getText()).toContain('Create');
      });

      it('click on tab2, click on pen icon, get first pill button', function() {
        browser.get('http://localhost:4200/#/settings/main');
        element(by.id('tab-2')).click();
        element(by.id('penIcon')).click();
        expect(element.all(by.css('.pillButtons')).get(0).getText()).toContain('Java Applied');
      });

});