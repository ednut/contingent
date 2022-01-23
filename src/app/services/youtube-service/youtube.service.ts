import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { VideoData } from '../../models/video';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiKey = 'AIzaSyCbRK6BQWaem2bRdb-PQcVrdek_IOw5xbs';

  constructor(public http: HttpClient) { }

  getData(maxResults: number): Observable<VideoData> {
    let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=${maxResults}&playlistId=PLIuscc7nstlGV7fcg2GUiXkE9XLYTRC_9&key=${this.apiKey}`
    return this.http.get<VideoData>(url)
  }

  getDetail(id:string): Observable<any> {
    let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLIuscc7nstlGV7fcg2GUiXkE9XLYTRC_9&key=${this.apiKey}`
    return this.http.get<VideoData>(url)
    .pipe(map((res: VideoData) => {
      return res['items'].find((item: any) => item.snippet.resourceId.videoId === id);
    }))
  }
}
