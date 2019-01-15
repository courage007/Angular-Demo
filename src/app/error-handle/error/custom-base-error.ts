/**
 * 自定义异常基类
 * @class
 */
export class CustomBaseError extends Error {
  constructor(errorMsg?: string) {
    super(errorMsg);
  }
}