import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-event-write',
  templateUrl: './event-write.component.html',
  styleUrls: ['./event-write.component.scss']
})
export class EventWriteComponent implements OnInit {

  constructor() { }

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
