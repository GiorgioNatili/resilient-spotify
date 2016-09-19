import { ResilientSpotifyPage } from './app.po';

describe('resilient-spotify App', function() {
  let page: ResilientSpotifyPage;

  beforeEach(() => {
    page = new ResilientSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
