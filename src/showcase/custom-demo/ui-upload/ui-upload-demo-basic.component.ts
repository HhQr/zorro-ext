import { Component, OnInit } from '@angular/core';
import { NzMessageService } from '../../../components/ng-zorro-antd.module';

@Component({
    selector: 'ui-upload-demo-basic',
    template: `
  <ui-upload [(ngModel)]="files"></ui-upload>
  <button nz-button [nzType]="'primary'" (click)="hanle()">获取文件id</button>
  `,
    styles: [``]
})
export class UiUploadDemoBasicComponent implements OnInit {
    files: any[] =[];
    constructor(private _message: NzMessageService) { }

    ngOnInit() {}

    hanle(){
        this._message.info('文件id值为：'+this.files);
    }

}
