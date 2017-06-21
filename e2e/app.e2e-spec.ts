import { NgclitestPage } from './app.po';

describe('ngclitest App', () => {
  let page: NgclitestPage;

  beforeEach(() => {
    page = new NgclitestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
