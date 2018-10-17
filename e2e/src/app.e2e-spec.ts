import { AppPage } from './app.po';
import { SettingsPage } from './app.po';

describe('workspace-project App', () => {
  let setting: SettingsPage;
  let page: AppPage;

  beforeEach(() => {
    setting = new SettingsPage();
    page = new AppPage();
  });

  it('should display setting page', () => {
    setting.navigateTo();
    expect(setting.getH1Text()).toEqual('Candidate List');
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Candidate Introduction');
  });

  
});
