import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

}
