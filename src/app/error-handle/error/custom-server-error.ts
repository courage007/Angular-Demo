import { HttpErrorResponse } from "@angular/common/http";
import { CustomBaseError } from "./custom-base-error";

/**
 * 自定义服务器端异常
 * @class
 */
export class CustomServerError extends CustomBaseError {
    _httpErrorResponse: HttpErrorResponse;
    get httpErrorResponse(): HttpErrorResponse {
        return this._httpErrorResponse;
    }
    set httpErrorResponse(value) {
        this._httpErrorResponse = value;
    }

    constructor(httpErrorResponse: HttpErrorResponse) {
        super(httpErrorResponse.message);
        Object.setPrototypeOf(this, CustomServerError.prototype);// 需要在原型上声明
        
        this.httpErrorResponse = httpErrorResponse;
    }
}