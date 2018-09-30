import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.component.html',
  styleUrls: ['./meeting-detail.component.scss']
})
export class MeetingDetailComponent implements OnInit {

  content_detail:string = '<h5 class="title ellipsis" title="[워크숍] 퍼포먼스 마케터를 위한 데이터 시각화">[워크숍] 퍼포먼스 마케터를 위한 데이터 시각화</h5><h6 class="sub_title">서브 타이틀입니다</h6>';
  constructor() { }

  ngOnInit() {
  }

}
