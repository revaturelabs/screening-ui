import { ScreeningPage, SettingsPage, ScreeningQuestionPage, HomePage, SettingsBucketPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page1: ScreeningPage;
  let page2: SettingsPage;
  let page3: ScreeningQuestionPage;
  let page4: HomePage;
  let page5: SettingsBucketPage

  beforeEach(() => {
    page1 = new ScreeningPage();
    page2= new SettingsPage();
    page3= new ScreeningQuestionPage();
    page4= new HomePage();
    page5= new SettingsBucketPage();
  });

  it('should display H1 Candidate Introduction', () => {
    page1.navigateTo();
    expect(page1.getH1Text()).toEqual('Candidate Introduction');
  });

  it('should display All Categories', () => {
    page2.navigateTo();
    expect(page2.getH6Text()).toEqual('All Categories');
  });

  it('should display H1 Technical Questions', () => {
    page3.navigateTo();
    expect(page3.getH1Text()).toEqual('Technical Questions');
  });

  it('should display H1 Candidate List', () => {
    page4.navigateTo();
    expect(page4.getH1Text()).toEqual('Candidate List');
  });

  it('should display link name Back to Categories', () => {
    page5.navigateTo();
    expect(page5.getBBText()).toEqual('Back to Categories');
  });

  it('click on tab2 and populate list group item', function() {
    browser.get('http://localhost:4200/#/settings/main');
    element(by.id('tab-2')).click();
    //element.all(by.css('.list-group-item')).get(0).element(by.tagName('a')).getText().toEqual('Beta Skills');
    expect(element.all(by.css('.list-group-item')).get(0).getText()).toContain('Beta Skills');
  });

  //need to make a for loop to check all buttons for name

  // it('click penIcon and check Java Applied button', function() {
  //   browser.get('http://localhost:4200/#/settings/main');
  //   element(by.id('tab-2')).click();
  //   element(by.id('penIcon')).click();
  //   //element.all(by.css('.list-group-item')).get(0).element(by.tagName('a')).getText().toEqual('Beta Skills');
  //   expect(element.all(by.css('.pillButtons')).get(0).getText()).toContain('Java Applied');
  // });

  // it('click on penIcon and check Hibernate button', function() {
  //   browser.get('http://localhost:4200/#/settings/main');
  //   element(by.id('tab-2')).click();
  //   element(by.id('penIcon')).click();
  //   //element.all(by.css('.list-group-item')).get(0).element(by.tagName('a')).getText().toEqual('Beta Skills');
  //   expect(element.all(by.css('.pillButtons')).get(1).getText()).toContain('Hibernate');
  // });

  it('click on different penIcon and check another button', function() {
    browser.get('http://localhost:4200/#/settings/main');
    element(by.id('tab-2')).click();
    //element(by.id('penIcon')).click();
    element.all(by.id('penIcon')).click();
    //element.all(by.css('.list-group-item')).get(0).element(by.tagName('a')).getText().toEqual('Beta Skills');
    expect(element.all(by.css('.list-group-item')).get(0).getText()).toContain('Beta Skills');
  });

  it('click on tab2, click on pen icon, get first pill button', function() {
    browser.get('http://localhost:4200/#/settings/main');
    element(by.id('tab-2')).click();
    element(by.id('penIcon')).click();
    //expect(element.all(by.css('.list-group-item')).get(0).getText()).toEqual('Beta Skills');
    expect(element.all(by.css('.pillButtons')).get(0).getText()).toContain('Java Applied');
  });

   it('click on tab2 and populate list group item', function() {
     browser.get('http://localhost:4200/#/settings/main');
     element(by.id('tab-2')).click();
     element(by.id('penIcon')).click();
     element.all(by.css('.pillButtons')).click();
     //expect(element.all(by.css('.list-group-item')).get(0).getText()).toEqual('Beta Skills');
     expect(element(by.id('font-fix')).getText()).toContain('Java Applied');
   }); 
});
