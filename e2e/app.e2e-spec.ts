import { FirebaseAppPage } from './app.po';

describe('firebase-app App', () => {
  let page: FirebaseAppPage;

  beforeEach(() => {
    page = new FirebaseAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
