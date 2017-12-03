import { Injectable } from "@angular/core";
import { BsModalService } from "ngx-bootstrap";

@Injectable()
export class ModalService {

  constructor(private bsModalService: BsModalService) { }

  show(component: any, args?: any, options?: any): Promise<any> {
    return new Promise(resolve => {
      options = options || {};
      const modal = this.bsModalService.show(component, options);
      let result: any;
      const sub = this.bsModalService.onHidden.subscribe(() => {
        sub.unsubscribe();
        resolve(result);
      });
      modal.content.args = args;
      modal.content.close = (val?: any) => {
        result = val;
        modal.hide();
      };
    });
  }
}
