import { ErrorHandler, Injector, Injectable } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from "../error-service/notification-service";
import { CustomClientError } from "../error/custom-client-error";
import { CustomServerError } from "../error/custom-server-error";

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

    handleError(error: CustomClientError | CustomServerError) {
        if (this.notificationService == null) {
            this.notificationService = this.injector.get(NotificationService);
        }

        if (error instanceof CustomServerError) {
            console.log('server custom error');
        } else if (error instanceof CustomClientError) {
            console.log('client custom error');
            console.error(error);
        }

        // log the error(打印到控制台，上报给服务器):统计异常，方便异常分析（如: 移动端场景）
        // console.error(error);
        // https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;
    }
}