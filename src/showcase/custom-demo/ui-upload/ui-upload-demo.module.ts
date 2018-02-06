import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiUploadDemoRoutingModule } from './ui-upload-demo.routing.module';
import { NzCodeBoxModule } from '../../share/nz-codebox/nz-codebox.module';
import { YztCustomModule } from '../../../custom-components/yzt-custom.module';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { UiUploadDemoComponent } from './ui-upload-demo.component';
import { UiUploadDemoBasicComponent } from './ui-upload-demo-basic.component';

@NgModule({
    imports: [
        CommonModule,
        UiUploadDemoRoutingModule,
        NzCodeBoxModule,
        YztCustomModule,
        FormsModule,
        JsonpModule
    ],
    declarations: [UiUploadDemoComponent,UiUploadDemoBasicComponent]
})
export class UiUploadDemoModule { }
