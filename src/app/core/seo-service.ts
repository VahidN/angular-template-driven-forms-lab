import { Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";
import { distinctUntilChanged, filter } from "rxjs/operators";

@Injectable()
export class SeoService {

  constructor(private titleService: Title, private metaService: Meta, private router: Router) { }

  enableSeo() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged()
    ).subscribe(() => {
      this.addMetaData(this.router.routerState.snapshot.root);
    });
  }

  private addMetaData(root: ActivatedRouteSnapshot): void {
    if (root.children && root.children.length) {
      this.addMetaData(root.children[0]);
    } else if (root.data) {
      this.setTitle(root.data);
      this.setMetaTags(root.data);
    }
  }

  private setMetaTags(routeData: { [name: string]: any; }) {
    const routeDataMetaTagsKey = "metaTags";
    const metaTags = routeData[routeDataMetaTagsKey];
    if (!metaTags) { return; }
    for (const tag in metaTags) {
      if (metaTags.hasOwnProperty(tag)) {
        const newTag = { name: tag, content: metaTags[tag] };
        console.log("new tag", newTag);
        this.metaService.addTag(newTag);
      }
    }
  }

  private setTitle(routeData: { [name: string]: any; }) {
    const routeDataTitleKey = "title";
    const title = routeData[routeDataTitleKey];
    if (title) {
      console.log("new title", title);
      this.titleService.setTitle(title);
    }
  }
}
