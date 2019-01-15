import { CustomBaseError } from "./custom-base-error";

/**
 * 自定义异常
 * @class
 */
// https://stackoverflow.com/questions/44108285/angular-4-custom-errorhandler-doesnt-recognize-custom-error
export class CustomClientError extends CustomBaseError {
  
    constructor(message: string) {
      super(message);
      this.name = CustomClientError.name;
      Object.setPrototypeOf(this, CustomClientError.prototype);// 需要在原型上声明
    }
  }