import { of } from 'rxjs';
import { YoutubeService } from './youtube.service'

describe('Youtube service', () => {

  let service: YoutubeService;
  const http = jest.fn();

  beforeEach(() => {
    service = new YoutubeService(http as any);
  });

  describe('Test: getData', () => {
    it('should return video object', () => {
      const dataCount = 10
      const response = {
        "kind": "youtube#playlistItemListResponse",
        "etag": "hpWMm2W6mwLR84CtsGo-9pmI0-U",
        "nextPageToken": "EAAaBlBUOkNBbw",
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "ysAA5t8HDHJW3MIA-jm2cz8PDBw",
                "id": "UExJdXNjYzduc3RsR1Y3ZmNnMkdVaVhrRTlYTFlUUkNfOS40NzZCMERDMjVEN0RFRThB",
                "snippet": {
                    "publishedAt": "2022-01-20T16:13:52Z",
                    "channelId": "UCUhuzyWj3YH_86esQfoMeLQ",
                    "title": "Côte d'Ivoire vs Algeria | Africa Cup of Nations 2021 Highlights",
                    "description": "Africa Cup of Nations 2021 group matches Côte d'Ivoire vs Algeria live match highlights at Douala Stadium.\n\nThis is a video of a simulation from an eFootball game.\nRealistic football matches gameplay with additional mods from SmokePatch, VirtueRed, EvoWeb, Spursfan18, UrbanHack86, Predator002, Tufkar84, Holland, Liberty, Hawke's, Durandil67, Funzotik's, Gothlay, Nesa24, Hoppus117, also all mods face, kit pack and stadium maker and credit to them all.\n\nafrica cup of nations, africa cup of nations 2021, africa cup of nations live, african cup of nations, africa cup of nations 2022, cote divoire vs algeria - africa cup of nations 2021 final, cote d'ivoire squad africa cup of nations 2021, coupe d'afrique des nations, algeria vs equatorial guinea africa cup of nations, africa, live streaming cote d'ivoire vs algeria, afcon 2021, cote d'ivoire africa cup of nations, cote d'ivoire squad africa cup of nations 2022\n\n#TotalEnergiesAFCON2021 #AFCON2021 #AfricaCupofNations2021 #AFCON2022 #gameplaybolazise",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/CP3p0seDLhk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/CP3p0seDLhk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/CP3p0seDLhk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Gameplay Bola Zise",
                    "playlistId": "PLIuscc7nstlGV7fcg2GUiXkE9XLYTRC_9",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "CP3p0seDLhk"
                    },
                    "videoOwnerChannelTitle": "Gameplay Bola Zise",
                    "videoOwnerChannelId": "UCUhuzyWj3YH_86esQfoMeLQ"
                },
                "contentDetails": {
                    "videoId": "CP3p0seDLhk",
                    "videoPublishedAt": "2022-01-20T16:21:49Z"
                },
                "status": {
                    "privacyStatus": "public"
                }
            }
        ],
        "pageInfo": {
            "totalResults": 10,
            "resultsPerPage": 10
        }
      } 
      const httpMock = {
        get: jest.fn().mockReturnValue(of(response))
      };
      const serviceMock = new YoutubeService(httpMock as any);
      serviceMock.getData(dataCount).subscribe((data) => {
        expect(httpMock.get).toBeDefined();
        expect(httpMock.get).toHaveBeenCalled();
        expect(data).toEqual(response);
      });      
    })
  })

  describe('Test: getDetail', () => {
    it('should return video object', () => {
      const id = 'b5GkIyApFRs'
      const response = {
        "kind": "youtube#playlistItem",
        "etag": "RqG2VBCSXg5NsEEjqyoSEuApQjk",
        "id": "UExJdXNjYzduc3RsR1Y3ZmNnMkdVaVhrRTlYTFlUUkNfOS45NDk1REZENzhEMzU5MDQz",
        "snippet": {
            "publishedAt": "2022-01-18T13:49:39Z",
            "channelId": "UCUhuzyWj3YH_86esQfoMeLQ",
            "title": "Zimbabwe vs Guinea Live | Africa Cup of Nations 2021",
            "description": "Africa Cup of Nations 2021 group B matches Zimbabwe vs Guinea live match highlights at Stade Ahmadou Ahidjo.\n\nThis is a video of a simulation from an eFootball game.\nRealistic football matches gameplay with additional mods from SmokePatch, VirtueRed, EvoWeb, Spursfan18, UrbanHack86, Predator002, Tufkar84, Holland, Liberty, Hawke's, Durandil67, Funzotik's, Gothlay, Nesa24, Hoppus117, also all mods face, kit pack and stadium maker and credit to them all.\n\nafrica cup of nations, zimbabwe vs guinea, africa cup of nations 2021, africa cup of nations 2022, 2021 africa cup of nations, zimbabwe vs guinea live, guinea vs zimbabwe live, coupe d'afrique des nations, zimbabwe vs guinea afcon 2021, zimbabwe vs guinea can 2021, afcon 2021 zimbabwe vs guinea, 2022 africa cup of nations, can 2021 zimbabwe vs guinea, guinea vs zimbabwe, afcon 2021, zimbabwe vs guinea highlights, africa cup of nations live, africa cup of nations efootball.\n\n#TotalEnergiesAFCON2021 #Zimbabwe #Guinea #ZimbabweGuinea #AFCON2021 #AfricaCupofNations2021 #AFCON2022 #gameplaybolazise",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/b5GkIyApFRs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/b5GkIyApFRs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/b5GkIyApFRs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Gameplay Bola Zise",
            "playlistId": "PLIuscc7nstlGV7fcg2GUiXkE9XLYTRC_9",
            "position": 2,
            "resourceId": {
                "kind": "youtube#video",
                "videoId": "b5GkIyApFRs"
            },
            "videoOwnerChannelTitle": "Gameplay Bola Zise",
            "videoOwnerChannelId": "UCUhuzyWj3YH_86esQfoMeLQ"
        },
        "contentDetails": {
            "videoId": "b5GkIyApFRs",
            "videoPublishedAt": "2022-01-18T14:14:53Z"
        },
        "status": {
            "privacyStatus": "public"
        }
    }
      const httpMock = {
        get: jest.fn().mockReturnValue(of(response))
      };
      const serviceMock = new YoutubeService(httpMock as any);
      serviceMock.getDetail(id).subscribe((data) => {
        expect(httpMock.get).toBeDefined();
        expect(httpMock.get).toHaveBeenCalled();
        expect(data).toEqual(response);
      });      
    })
  })


});