import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shipper-select-demo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './shipper-select-demo.component.html',
  styleUrls: ['./shipper-select-demo.component.less']
})
export class ShipperSelectDemoComponent {
    
    ShipperSelectDemoBasicCode = require('!!raw-loader!./shipper-select-demo-basic.component');
    ShipperSelectDemoMultipleCode  = require('!!raw-loader!./shipper-select-demo-multiple.component');
    ShipperSelectDemoTemplateCode  = require('!!raw-loader!./shipper-select-demo-template.component');

}
