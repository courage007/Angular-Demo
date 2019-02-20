import { TypeDecorator, makeDecorator } from '../metadata/index';

export const NG_EVENTBUS = 'NgEventBus';

/**
 * EventConfig
 */
export class EventConfig {
    /**
     * 目标对象
     */
    target: string;

    /**
     * 事件名称
     */
    eventName: string;

    /**
     * Token值（不知道作用是啥）
     */
    tokenValue: any;
}

/**
 * NgEventBus
 */
export interface NgEventBus {
    /**
     * 待公开事件集合
     */
    watch: EventConfig[];
}

/**
 * NgEventBusDecorator
 */
export interface NgEventBusDecorator {
    (obj?: NgEventBus): TypeDecorator;
    new(obj?: NgEventBus): NgEventBus;
}



/**
 * NgEventBus
 */
export function NgEventBus(options: NgEventBus) {
    const decoratorFactory = makeDecorator(NG_EVENTBUS, (obj: NgEventBus) => {
        console.log('obj:' + obj);
    } );
    return decoratorFactory(options);
}
