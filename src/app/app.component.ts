import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomClientError } from './error-handle';
import { CustomServerError } from './error-handle/error/custom-server-error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  localText = 'Interact with the custom input component';
  changeLocalText() {
    this.localText = 'success';
  }

  update = 'update when init';
  errorEmitter() {
    throw new Error('Im an native error');// 主动抛出Error
  }

  customErrorEmitter() {
    throw new CustomClientError('Im a custom error');
  }

  httpErrorEmitter() {
  const init = {
      error : 'Im a navtive http error'
  }
    throw new HttpErrorResponse(init);
  }

  customHttpErrorEmitter() {
    const init = {
        error : 'Im a custom http error'
    }
    const httpErrorResponse = new HttpErrorResponse(init);
    throw new CustomServerError(httpErrorResponse);
  }

  

}