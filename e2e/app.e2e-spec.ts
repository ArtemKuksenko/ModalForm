import { ModalFormPage } from './app.po';

describe('modal-form App', () => {
  let page: ModalFormPage;

  beforeEach(() => {
    page = new ModalFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
