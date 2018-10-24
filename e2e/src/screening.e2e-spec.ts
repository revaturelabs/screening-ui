import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {

    it('select candidate, begin interview, grade sql questions, report violation, enter feedback, finish, Pass, Complete Interview', function() {
        browser.get('http://localhost:4200/#/home');
        browser.driver.sleep(5000);
        element.all(by.css('td')).get(0).click();
        browser.driver.sleep(5000);
        element.all(by.css('.btn')).get(0).click();
        browser.driver.sleep(5000);
        element.all(by.css('.btn')).get(1).click();
        element.all(by.css('.pointer')).get(1).click(); //SQL tab
        element.all(by.css('.question')).get(1).click(); //sublanguages 
        element.all(by.css('.btn-outline-dark')).get(4).click(); //score 5
        element.all(by.css('.btn-outline-dark')).get(5).click(); //submit score
        element.all(by.css('.question')).get(0).click(); //joins
        element.all(by.css('.btn-outline-dark')).get(3).click(); //score 4
        element.all(by.css('.btn-outline-dark')).get(5).click(); //submit score
        element.all(by.css('.question')).get(2).click(); //joins
        element.all(by.css('.btn-outline-dark')).get(3).click(); //score 4
        element.all(by.css('.btn-outline-dark')).get(5).click(); //submit score
        element.all(by.css('.btn')).get(0).click(); //Report Violation
        element.all(by.css('.off')).get(1).click(); //Attire
        element.all(by.css('.btn')).get(1).click(); //Submit Violation
        element(by.id('footsie')).sendKeys('done'); //required Overall Feedback
        element(by.id('submit-button')).click();
        browser.driver.sleep(5000);
        element.all(by.css('.slider')).get(0).click(); //Pass
        browser.driver.sleep(5000);
        element.all(by.css('.btn')).get(1).click(); //Complete Interview
        expect(element.all(by.css('h1')).getText()).toContain('Final Summary');
      });

      // shortened version that does not answer questions
      // it('click td check click btn click bn fill in required text', function() {
  //   browser.get('http://localhost:4200/#/home');
  //   element.all(by.css('td')).get(0).click();
  //   element.all(by.css('.btn')).get(0).click();
  //   element.all(by.css('.btn')).get(1).click();
  //   element(by.id('footsie')).sendKeys('done');
  //   element(by.id('submit-button')).click();
  //   element.all(by.css('.slider')).get(0).click();
  //   element.all(by.css('.btn')).get(1).click();
  //   expect(element.all(by.css('h1')).getText()).toContain('Final Summary');
  // });

});