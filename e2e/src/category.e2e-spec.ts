import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {

it('homepage, click on Settings', function() {
    browser.get('http://localhost:4200/#/home');//Home Page
    browser.driver.sleep(2000);
    element.all(by.css('.nav-link')).get(1).click();//Click on Settings
    browser.driver.sleep(4000);
    element.all(by.css('.list-group-item')).get(0).click();//Click on REST
    browser.driver.sleep(2000);
    element.all(by.css('.fa-pencil-alt')).get(0).click();//Click on edit icon
    browser.driver.sleep(5000);
    element(by.id('closeModal')).click();
    browser.driver.sleep(4000);
    element.all(by.css('.btn-primary')).get(0).click();//Click on Create New Question
    browser.driver.sleep(2000);
    element(by.id('questionText')).sendKeys('What is the REST equivalent to SOAPs WSDL?');
    browser.driver.sleep(1000);
    element(by.id('1pointAnswer')).sendKeys('Not Sure');
    element(by.id('2pointAnswer')).sendKeys('What is SOAP?');
    element(by.id('3pointAnswer')).sendKeys('What is a WSDL?');
    element(by.id('4pointAnswer')).sendKeys('WADL');
    element(by.id('5pointAnswer')).sendKeys('WADL, Web Application Description Language');
    browser.driver.sleep(3000);
    element(by.id('saveModal')).click();//Click on save
    //element(by.css('.modal-content')).get(1).element(by.tagName('button'));//Click on save
    //element.all(by.css('.btn-primary')).get(1).click();//Click on save
    browser.driver.sleep(2000);
    element.all(by.css('.slider')).get(3).click();//Deactivate
    browser.driver.sleep(2000);
    element.all(by.css('.fa-trash-alt')).get(3).click();//Delete
    browser.driver.sleep(2000);
    element(by.id('confirmDelete')).click();
    browser.driver.sleep(2000);
    element(by.css('.fa-caret-left')).click();
    browser.driver.sleep(2000);
    element(by.css('.btn-primary')).click();
    browser.driver.sleep(2000);
    element(by.id('createInput')).sendKeys('CSS');
    browser.driver.sleep(2000);
    element(by.id('createButton')).click();
    browser.driver.sleep(2000);
    element.all(by.css('.fa-trash-alt')).get(10).click();//Delete
    browser.driver.sleep(2000);
    expect(element.all(by.css('.list-group-item')).get(2).getText()).toContain('SOAP');
  });

});