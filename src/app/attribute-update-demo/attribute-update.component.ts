import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'attribute-demo',
  template: `
    
  `,
  styles: [`

  `
  ]
})

export class AttributeUpdateComponent implements OnChanges {
  private _update: any;
  @Input('update')
  set update(value) {
    this._update = value;
  }
  get update() {
    return this._update;
  }

  ngOnChanges(changes) {
    this.update = changes.update && changes.update.currentValue;
    console.log(this.update);
  }

}