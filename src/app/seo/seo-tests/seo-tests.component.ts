import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-seo-tests",
  templateUrl: "./seo-tests.component.html",
  styleUrls: ["./seo-tests.component.css"]
})
export class SeoTestsComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) {
    this.setHTMLMetatags();
  }

  private setHTMLMetatags() {

    // addTag & addTags
    this.metaService.addTag({ name: "description", content: "How to optimize your Angular App for search engine and other crawlers." });
    this.metaService.addTag({ name: "author", content: "DNT" });
    this.metaService.addTag({ name: "keywords", content: "Angular, Meta Service" });
    // Or
    this.metaService.addTags([
      { name: "description", content: "How to optimize your Angular App for search engine and other crawlers." },
      { name: "author", content: "DNT" },
      { name: "keywords", content: "Angular, Meta Service" }
    ], false); // --> forceCreation = false

    this.metaService.addTag({ name: "twitter:card", content: "summary_large_image" });
    this.metaService.addTag({ name: "twitter:site", content: "@my_site" });
    this.metaService.addTag({ name: "twitter:title", content: "Front-end Web Development" });
    this.metaService.addTag({ name: "twitter:description", content: "Learn frontend web development..." });
    this.metaService.addTag({ name: "twitter:image", content: "https://site/images/image.png" });
    // Or
    this.metaService.addTags([
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@my_site" },
    ], false); // --> forceCreation = false

    // getTag & getTags
    const viewport = this.metaService.getTag("name=viewport");
    if (viewport) {
      console.log(viewport.content); // width=device-width, initial-scale=1
    }
    const author = this.metaService.getTag("name=author");
    if (author) {
      console.log(author.content); // DNT
    }

    this.metaService.addTag({ name: "author", content: "DNT" });
    this.metaService.addTag({ name: "author", content: "Other Author" }, true);
    const authors = this.metaService.getTags("name=author");
    console.log(authors[0]); // <meta name="author" content="DNT">
    console.log(authors[1]); // <meta name="author" content="Other Author">

    // updateTag
    this.metaService.addTag({ name: "twitter:card", content: "summary_large_image" });
    this.metaService.updateTag({ name: "twitter:card", content: "summary" }, `name='twitter:card'`);
    this.metaService.updateTag({ name: "description", content: "Angular meta service" });

    // removeTag & removeTagElement
    this.metaService.removeTag("charset");
    // Or
    const chartsetTag = this.metaService.getTag("charset");
    if (chartsetTag) {
      this.metaService.removeTagElement(chartsetTag);
    }

    // Setting the browser page Title in an Angular app
    const currentTitle = this.titleService.getTitle();
    console.log(currentTitle);
    this.titleService.setTitle("newTitle ...");
  }

  ngOnInit() {
  }

}
