import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppConfigService {

  private config: AppConfig | null = null;

  constructor(private http: HttpClient) { }

  loadClientConfig(): Promise<any> {
    return this.http.get<AppConfig>("assets/client-config.json")
      .toPromise()
      .then(config => {
        this.config = config;
        console.log("Config", this.config);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }

  get configuration(): AppConfig {
    if (!this.config) {
      throw new Error("Attempted to access configuration property before configuration data was loaded.");
    }
    return this.config;
  }
}

export class AppConfig {
  host: string | null = null;
}
