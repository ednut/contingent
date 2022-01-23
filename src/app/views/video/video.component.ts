import { Component, OnInit, HostListener } from '@angular/core';
import { YoutubeService } from '../../services/youtube-service/youtube.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videos: any[] = [];
  dataCount = 10
  breakpoint: number | undefined;
  totalLength: number | undefined;
  page: number = 1;
  itemsPerPage: number = 4;

  constructor(private youTubeService: YoutubeService) { }

  ngOnInit() {
    this.youTubeService.getData(this.dataCount).subscribe(videos => {
      this.totalLength = videos.items.length;
      for (let video of videos["items"]) {
        this.videos.push(video.snippet)
      }
    });
    this.breakpoint = (window.innerWidth <= 1200) ? 1 : 2;
  }

  @HostListener('window:resize')
  onResize(){
    this.breakpoint = (window.innerWidth <= 1200) ? 1 : 2;
  }

}
