import { Component, OnInit } from '@angular/core';
import { NzMessageService } from "../../../components/ng-zorro-antd.module";

@Component({
    selector: 'master-select-demo-valueField',
    template: `
    <yzt-master [(ngModel)]="valueMobile" [valueField]="'mobile'"></yzt-master>
    <button nz-button [nzType]="'primary'" (click)="handleMobile()">获取师傅电话/ID</button>
    <p style="padding: 5px;"></p>
    <yzt-master [(ngModel)]="valueName" [valueField]="'realName'"></yzt-master>
    <button nz-button [nzType]="'primary'" (click)="handleName()">获取师傅姓名</button>
    `,
    styles: []
})
export class MasterSelectDemoValueFieldComponent implements OnInit {
    valueMobile = '';
    valueName = '';
    constructor(private _message: NzMessageService) { }

    ngOnInit() {
    }

    handleMobile() {
        this._message.info("师傅电话为："+this.valueMobile);
        console.log(this.valueMobile)
    }

    handleName() {
        this._message.info("师傅姓名为："+this.valueName);
        console.log(this.valueName)
    }

}
