import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../../services/youtube-service/youtube.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})

export class VideoDetailsComponent implements OnInit {

  userID!: string | null;
  details: any
  url!: string;
  dataCount = 10

  constructor(private route: ActivatedRoute, private youTubeService: YoutubeService) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id')
    if(this.userID) {
      this.youTubeService.getDetail(this.userID).subscribe((data) => {
        this.details = data.snippet
        this.url = `https://www.youtube.com/embed/${data.snippet.resourceId.videoId}`
      } )
    }
  }

}
