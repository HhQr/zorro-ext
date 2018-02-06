import { Component, OnInit, NgModule, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgZorroAntdModule, UploadFile } from '../../components/ng-zorro-antd.module';
import { environment } from '../../environments/environment';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UiUploadComponent),
    multi: true
};
@Component({
    selector: 'ui-upload',
    templateUrl: './ui-upload.component.html',
    styleUrls: ['./ui-upload.component.less'],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class UiUploadComponent implements ControlValueAccessor, OnInit {
    private onTouchedCallback: () => () => {};
    private onChangeCallback: (_: any) => () => {};

    nzAction: any = environment.BASEURL + '/upload';

    innerValue: string[];

     // 文件列表，双向绑定
     fileList: Array<UploadFile> = [];

    // 设置属性，并触发监听器
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }
    // 获取属性
    get value(): any {
        return this.innerValue;
    };

    /**
     * 可赋值回显
     * @type {Array}
     */
    @Input() files: any[] = [];

    // 接受上传的文件类型
    @Input() nzAccept:string;

    //上传文件个数
    @Input() fileNumber:number = 1;

   

    constructor() { }

    ngOnInit() {
        //如果有值，先回显展示
        if (this.files.length) {
            if (!this.value) {
                this.value = [];
            }
            for (let f of this.files) {
                this.value.push(f)
            }
        }
    }

    nzChange(event) {
        if (event.file.status === 'done') {
            this.value = [];
            event.fileList.forEach(file => {
                file.response.forEach(item => {
                    this.value.push(item.id);
                })

            });
        }
    }

    // 写入值
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    // 注册变化处理事件
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    // 注册触摸事件
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    /**
     * 删除文件
     */
    handleRemove = (file: UploadFile) => {
        if (this.fileList) {
            this.fileList.forEach((f, i) => {
                if (f == file) {
                    this.fileList = this.fileList.slice(0, i).concat(this.fileList.slice(i + 1));
                    return false;
                }
            });
        }
        if (this.value) {
            this.value.forEach((id, i) => {
                if (id == file.response[0].id) {
                    this.value = this.value.slice(0, i).concat(this.value.slice(i + 1));
                    return false;
                }
            });
        }
    }

}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
    ],
    declarations: [
        UiUploadComponent
    ],
    exports: [UiUploadComponent]
})
export class UiUploadModule { }