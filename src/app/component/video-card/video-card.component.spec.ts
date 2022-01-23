import { render, screen } from '@testing-library/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { VideoCardComponent } from "./video-card.component";

describe('BannerComponent', () => {
  it('should render the component', async () => {
    let component = await render(VideoCardComponent, {
      imports: [NgxPaginationModule],
    });
    expect(component).toBeDefined();
  });

  it('should render the page', async () => {
    await render(VideoCardComponent, {
      imports: [NgxPaginationModule],
    });

    const content = screen.getByText('African cup of nations');
    expect(content).toBeDefined();
  });
});
