import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { VideoDetailsComponent } from './video-details.component';

describe('VideoDetailsComponent', () => {
    let fixture: VideoDetailsComponent
    let YoutubeServiceMock: any
    let ActivatedRouteMock: any
  
    beforeEach(() => {
      YoutubeServiceMock = {
        getDetail: jest.fn()
      };
      ActivatedRouteMock = {
          params: of(convertToParamMap({id: '123'}))
      }
      fixture = new VideoDetailsComponent(
        ActivatedRouteMock,
        YoutubeServiceMock
      ); 
    })
    it('should be initialized', async () => {
        fixture.details = YoutubeServiceMock
        expect(fixture.details).toHaveBeenCalled;
    });
  });