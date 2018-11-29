import { Component, OnInit, Input } from '@angular/core';
import { VIDEOS, VIDEO_HEADERS } from 'src/app/videos';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-video-list-admin',
  templateUrl: './video-list-admin.component.html',
  styleUrls: ['./video-list-admin.component.css'],
})
export class VideoListAdminComponent implements OnInit {
  videos = VIDEOS;
  video_headers = VIDEO_HEADERS.slice(0);

  searchText: string;
  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.video_headers.push('');
    this.video_headers.push('');
    this.dataService.currentText.subscribe(searchText => this.searchText = searchText);

  }

}
