import { ErrorHandler, Injector, Injectable } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from "../error-service/notification-service";

// https://medium.com/@aleixsuau/error-handling-angular-859d529fa53a
@Injectable()
export class CustomErrorHandler extends ErrorHandler {
    private notificationService: NotificationService;
    // https://long2know.com/2018/03/angular-custom-error-handler/
    // Injecting an Injector (that sounds weird) to avoid circular references 
    // which can occur when injecting certain services at setup time.
    constructor(private injector: Injector) {
        super();
    }

    handleError(error: Error | HttpErrorResponse) {
        if (this.notificationService == null) {
            this.notificationService = this.injector.get(NotificationService);
        }

        if (error instanceof HttpErrorResponse) {
            console.log('server error');
        } else {// Error
            console.log('client error');
        }

        // log the error(打印到控制台，上报给服务器):统计异常，方便异常分析（移动端场景）

        // https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;
    }
}