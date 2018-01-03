import { Project2Page } from './app.po';

describe('project2 App', () => {
  let page: Project2Page;

  beforeEach(() => {
    page = new Project2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
