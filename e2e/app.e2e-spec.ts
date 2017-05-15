import { AgriPage } from './app.po';

describe('agri App', () => {
  let page: AgriPage;

  beforeEach(() => {
    page = new AgriPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
