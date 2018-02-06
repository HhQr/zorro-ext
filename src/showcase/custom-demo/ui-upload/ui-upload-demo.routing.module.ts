import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiUploadDemoComponent } from './ui-upload-demo.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UiUploadDemoComponent }
    ])],
    exports: [RouterModule]
})
export class UiUploadDemoRoutingModule { }
