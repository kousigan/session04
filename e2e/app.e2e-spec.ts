import { Session04Page } from './app.po';

describe('session04 App', () => {
  let page: Session04Page;

  beforeEach(() => {
    page = new Session04Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
