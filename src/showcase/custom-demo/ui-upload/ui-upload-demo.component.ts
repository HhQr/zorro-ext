import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-upload-demo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './ui-upload-demo.component.html',
  styleUrls: ['./ui-upload-demo.component.less']
})
export class UiUploadDemoComponent{

    UiUploadDemoBasicCode = require('!!raw-loader!./ui-upload-demo-basic.component');

}
