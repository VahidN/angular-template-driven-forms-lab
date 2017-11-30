import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class SampleService {

  private msgSource = new BehaviorSubject<string>("default service value");

  telecast$ = this.msgSource.asObservable();

  constructor() { }

  editMsg(newMsg: string) {
    this.msgSource.next(newMsg);
  }

}
