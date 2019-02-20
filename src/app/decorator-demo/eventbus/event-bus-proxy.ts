import { IEmitable } from './types';
import { Type } from '@angular/core/src/type';

export class EventBusProxy {

  constructor(private eventBus: IEmitable, private hostType: Type<any>, private eventTokenValueProvider: () => any) {
  }

  post(eventName: string, data: any) {
    this.eventBus.post(this.hostType, this.eventTokenValueProvider(), eventName, data);
  }

  // on(eventName: string, data: any, handler: Function) {
  //   this.eventBus.on(null, this.eventTokenValueProvider(), eventName, (data) => handler(data), this);
  // }
}

