import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Observable } from "rxjs";
import { distinctUntilChanged, filter, map } from "rxjs/operators";

import { BreadCrumb } from "./bread-crumb";

@Component({
  selector: "app-bread-crumb",
  templateUrl: "./bread-crumb.component.html",
  styleUrls: ["./bread-crumb.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class BreadCrumbComponent implements OnInit {

  breadcrumbs$: Observable<BreadCrumb[]> | null = null;

  @Input() homeLabel: string | null = null;
  @Input() homeGlyphIcon: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.breadcrumbs$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        distinctUntilChanged(),
        map(event => event ? this.buildBreadCrumbs(this.activatedRoute.root) : []));
  }

  buildBreadCrumbs(route: ActivatedRoute, url: string = "", breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    const routeDataBreadCrumbKey = "breadcrumb";
    const routeConfig = route.routeConfig;

    const path = routeConfig && routeConfig.path !== undefined ? routeConfig.path : "";
    const nextUrl = `${url}${path}/`;

    let breadcrumb: BreadCrumb = {
      label: path,
      url: nextUrl,
      glyphIcon: ""
    };

    if (url === "") {
      breadcrumb = {
        label: this.homeLabel ? this.homeLabel : "",
        url: nextUrl,
        glyphIcon: this.homeGlyphIcon ? this.homeGlyphIcon : ""
      }
    } else if (routeConfig && routeConfig.data !== undefined) {
      const definedBreadcrumb = routeConfig.data[routeDataBreadCrumbKey] as BreadCrumb;
      if (definedBreadcrumb !== undefined) {
        if (definedBreadcrumb.url === undefined) {
          definedBreadcrumb.url = nextUrl;
        }
        breadcrumb = definedBreadcrumb;
      }
    }

    console.log("breadcrumb", { path: path, breadcrumb: breadcrumb, route: route });
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      return this.buildBreadCrumbs(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}
