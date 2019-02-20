import { Component, OnChanges, Input } from '@angular/core';
import { NgEventBus } from './eventbus/event-bus-decorator';
// 方法一：类装饰器
// https://blog.angularindepth.com/implementing-custom-component-decorator-in-angular-4d037d5a3f0d
function isTestable(value) {
  return function decorator(target) {
    target.isTestable = value;
  }
}

@NgEventBus({
  watch:[]
})
@isTestable(true)
@Component({
  selector: 'custom-decorator-demo',
  template: `
    <div>decorator</div>
    <div>isTestable:{{isTestable}}</div>
    <button (click)="decoratorTestMethod()">decoratorTestMethod</button>
  `,
  styles: [`

  `
  ]
})
@Console('Hey!')
export class DecoratorDemoComponent {
  constructor() {
    console.log('Yo!');
  }

  @methodDecorator()
  public decoratorTestMethod() {
    console.log('decoratorTestMethod');
  }
}

let decoratorDemoComponent: DecoratorDemoComponent = new  DecoratorDemoComponent();



// https://toddmotto.com/angular-decorators#method-decorators
function Console(message) {
  // access the "metadata" message
  console.log(message);
  // return a function closure, which
  // is passed the class as `target`
  return function (target) {
    console.log('Our decorated class', target);
  };
}

// https://www.jianshu.com/p/9b70be1fc6e8
/**
 * 方式二：方法装饰器
 */
function methodDecorator() {
  console.log("g(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("g(): called");
  }
}