import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-meeting-write',
  templateUrl: './meeting-write.component.html',
  styleUrls: ['./meeting-write.component.scss']
})
export class MeetingWriteComponent implements OnInit {

  htmlContent = '';

  constructor() {

   }

  ngOnInit() {
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: '내용을 입력하세요.',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
  };

}
