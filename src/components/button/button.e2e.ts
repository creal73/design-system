import { newE2EPage } from '@stencil/core/testing';

describe('ak-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ak-button></ak-button>');

    const element = await page.find('ak-button');
    expect(element).toHaveClass('hydrated');
  });
});
