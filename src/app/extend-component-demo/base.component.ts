import { Component, OnChanges } from '@angular/core';
import { BaseService } from './base.service';

@Component({
  selector: 'parent',
  template: `
    <div class="localparent">
      parent
    </div>
  `,
  styles: [`
    .localparent {
      font-size: 40px
    }
  `
  ]
})

export class BaseComponent implements OnChanges {
  
  test: any = 1;
  metada: BaseMetadata = new BaseMetadata();

  constructor(public baseService: BaseService) {

  }

  baseIncrement(): string {
    this.test = this.baseService && this.baseService.increment(this.test);
    return this.test;
  }

  ngOnChanges(change) {
    this.test = 1;
  }

}

export class BaseMetadata {
  name:string;
}