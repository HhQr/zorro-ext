// ---------------------------------------------------------
// | Imports
// ---------------------------------------------------------

// Common of angular
import { ModuleWithProviders, NgModule } from '@angular/core';

// Modules
import { GoodSelectModule } from './good-select/good-select.component';
import { NgZorroAntdModule } from '../components/ng-zorro-antd.module';
import { EchartsModule } from './echarts/echarts.component';
import { UIGridModule } from './ui-grid/ui-grid.component';
import { ShipperSelectModule } from "./shipper-select/shipper-select.component";
import { GridIconModule } from './ui-grid/grid-icon.component';
import { UiUploadModule } from './ui-upload/ui-upload.component';

// Services

// Tokens (eg. global services' config)
import { NzRootConfig } from '../components/ng-zorro-antd.module';

// ---------------------------------------------------------
// | Exports
// ---------------------------------------------------------

// Modules

// Components

// Services

// Tokens (eg. global services' config)
export { NzRootConfig } from '../components/ng-zorro-antd.module';

// ---------------------------------------------------------
// | Root module
// ---------------------------------------------------------

@NgModule({
  exports: [
    NgZorroAntdModule,
    GoodSelectModule,
    EchartsModule,
    UIGridModule,
    ShipperSelectModule,
    GridIconModule,
    UiUploadModule
  ]
})
export class YztCustomModule {

  static forRoot(options?: NzRootConfig): ModuleWithProviders {
    return {
      ngModule: YztCustomModule,
      providers: [
        // Services
      ]
    };
  }
}
