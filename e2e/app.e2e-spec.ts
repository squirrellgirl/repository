import { ProgettoAngular2EsempioPage } from './app.po';

describe('progetto-angular2-esempio App', function() {
  let page: ProgettoAngular2EsempioPage;

  beforeEach(() => {
    page = new ProgettoAngular2EsempioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
