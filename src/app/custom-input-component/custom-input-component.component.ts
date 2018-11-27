import { forwardRef, Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// 自定义输入控件:1.封装ControlValueAccessor
// https://code-examples.net/zh-CN/q/2154761
export const Code_EDITOR_INPUT_VALUE_ACCESSOR: any = {
  // https://blog.csdn.net/wangdan_2013/article/details/81314959
  provide: NG_VALUE_ACCESSOR,//
  useExisting: forwardRef(() => CustomInputComponentComponent),//
  multi: true//
};

@Component({
  // 自定义输入控件:2.引入依赖服务ControlValueAccessor
  providers:[Code_EDITOR_INPUT_VALUE_ACCESSOR],
  selector: 'custom-input-component',
  templateUrl: './custom-input-component.component.html',
  styleUrls: ['./custom-input-component.component.css']
})
// 自定义输入控件:3.1 implements ControlValueAccessor 
export class CustomInputComponentComponent implements ControlValueAccessor {

  constructor() {

  }
  changeValueFromCustomInput(){
    this.value = "1";
  }

  private _value: string = '';
  onChangeCallback = (_: any) => {
    console.log("When value changed:" + _);
  };
  onTouchedCallback = () => {
    console.log("When touched");
  };

  //get accessor
  get value(): any {
      return this._value;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
    }
  }

  // 自定义输入控件:3.2 implements ControlValueAccesso
  
  //From ControlValueAccessor interface
  writeValue(value: any) {// 写入值到元素(Outside Component->Current Component)
    if (value !== this._value) {
        this._value = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {//设置当控件接收到change事件时触发的回调
      this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {//设置当控件接收到touch事件时触发的回调
      this.onTouchedCallback = fn;
  }
}
