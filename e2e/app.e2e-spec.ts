import { QuestionsPage } from './app.po';

describe('questions App', function() {
  let page: QuestionsPage;

  beforeEach(() => {
    page = new QuestionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
