import { render, screen } from '@testing-library/angular';
import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  it('should render the component', async () => {
    let component = await render(BannerComponent, {});
    expect(component).toBeDefined();
  });

  it('should render the page', async () => {
    await render(BannerComponent);

    const content = screen.getByText('Find the most exciting African matches');
    expect(content).toBeDefined();
  });
});
