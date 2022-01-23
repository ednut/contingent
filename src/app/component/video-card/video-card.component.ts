import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  breakpoint: number | undefined;

  constructor() { }

  @Input() 
  videos: any;

  @Input() 
  totalLength: number | undefined;

  @Input() 
  page: number | undefined;

  @Input()
  itemsPerPage: number | undefined;

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 1200) ? 2 : 3;
  }

  @HostListener('window:resize')
  onResize(){
    this.breakpoint = (window.innerWidth <= 1200) ? 2 : 3;
  }

}
