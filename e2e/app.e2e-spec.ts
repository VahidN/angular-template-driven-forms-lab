import { AngularTemplateDrivenFormsLabPage } from './app.po';

describe('angular-template-driven-forms-lab App', () => {
  let page: AngularTemplateDrivenFormsLabPage;

  beforeEach(() => {
    page = new AngularTemplateDrivenFormsLabPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
