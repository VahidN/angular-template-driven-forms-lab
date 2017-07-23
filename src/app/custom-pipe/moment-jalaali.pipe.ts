import { Pipe, PipeTransform } from "@angular/core";

import * as momentJalaali from "moment-jalaali";

@Pipe({
  name: "momentJalaali"
})
export class MomentJalaaliPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return momentJalaali(value).format(args);
  }
}
