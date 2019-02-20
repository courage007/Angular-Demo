import { IEmitable } from './types';
import { Type } from '@angular/core/src/type';
import { EventBus } from './event-bus';

export class EventBusProxyTest {
    private _eventBus: EventBus;
    get eventBus(): EventBus { return this._eventBus; }

    constructor() {
        // 实例化EventBus
        this._eventBus = new EventBus();
    }
}

