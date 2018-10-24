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

});
