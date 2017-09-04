import { SampleDeploymentPage } from './app.po';

describe('sample-deployment App', () => {
  let page: SampleDeploymentPage;

  beforeEach(() => {
    page = new SampleDeploymentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
