import { MonkeyjPage } from './app.po';

describe('monkeyj App', function() {
  let page: MonkeyjPage;

  beforeEach(() => {
    page = new MonkeyjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
