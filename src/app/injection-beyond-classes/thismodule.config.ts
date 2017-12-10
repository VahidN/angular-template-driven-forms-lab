import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<string>("this.module.config");

export interface IThisModuleConfig {
  apiEndpoint: string;
}

export const ThisModuleConfig: IThisModuleConfig = {
  apiEndpoint: "http://localhost:45043/api/"
};
