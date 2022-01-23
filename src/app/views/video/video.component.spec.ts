import { VideoComponent } from './video.component';


describe('VideoComponent', () => {
  let fixture: VideoComponent
  let YoutubeServiceMock: any

  beforeEach(() => {
    YoutubeServiceMock = {
      getData: jest.fn()
    };
    fixture = new VideoComponent(
      YoutubeServiceMock
    );
  })
  it('should be initialized', async () => {
    fixture.dataCount = YoutubeServiceMock;
    expect(fixture.videos).toEqual([])
  });
});