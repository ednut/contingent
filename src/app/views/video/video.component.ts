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

  constructor(private youTubeService: YoutubeService) { }

  ngOnInit() {
    this.youTubeService.getData(this.dataCount).subscribe(lista => {
      for (let element of lista["items"]) {
        this.videos.push(element.snippet)
      }
    });
    this.breakpoint = (window.innerWidth <= 1200) ? 1 : 2;
  }

  @HostListener('window:resize')
  onResize(){
    this.breakpoint = (window.innerWidth <= 1200) ? 1 : 2;
  }

}
