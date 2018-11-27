import { Injectable } from "@angular/core";

@Injectable()
export class BaseService {
    increment(value): Number {
        return value + 1;
    }
}