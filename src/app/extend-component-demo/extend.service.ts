import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable()
export class ExtendService extends BaseService {
    increment(value): Number {
        return value + 2;
    }
}