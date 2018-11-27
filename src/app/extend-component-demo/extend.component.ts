import { Component, Input } from '@angular/core';
import { BaseComponent, BaseMetadata } from './base.component';
import { ExtendService } from './extend.service';
import { extend } from 'webdriver-js-extender';

@Component({
  selector: 'child',
  template: `
    <div class="localparent">
      child
    </div>
    <button (click)='this.increase()'>increase</button>
  `,
  styles: [`
    .localparent {
      font-size: 40px
    }
  `
  ]
})

// 不继承：模板、样式
// 继承
export class ExtendComponent extends BaseComponent {
  
  // 子类同名字段会覆盖基类的同名字段
  test = 0;
  metadata: ExtendMetadata = new ExtendMetadata();

  constructor(private extendService: ExtendService) {
    super(extendService);
  }

  increase() {
    console.log(this.test);
    console.log(this.baseIncrement());
    console.log(this.baseService.increment(this.test));
    console.log(this.extendService.increment(this.test));
    
    // 输出metadata
    console.log(this.metadata);
  }
}
export class ExtendMetadata extends BaseMetadata {
  localName: string;
}