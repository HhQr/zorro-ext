import { Component, OnInit } from '@angular/core';
import { NzMessageService } from '../../../../index.showcase';

@Component({
  selector: 'repair-good-select-multiple',
  template: `
    <yzt-repair-goods [(ngModel)]="value" [goodMode]="'multiple'"></yzt-repair-goods>
    <button nz-button  [nzType]="'primary'"  (click)="handle()">获取维修品名ID数组</button>
  `,
  styles  : []
})
export class RepairGoodSelectMultipleComponent implements OnInit {
  value = "";
  constructor(private _message: NzMessageService){}
  ngOnInit() {

  }

  handle() {
    console.log(this.value)
    this._message.create('info', `值为：${this.value}`);
  }
}


