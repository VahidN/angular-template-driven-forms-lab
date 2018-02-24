import { Component } from "@angular/core";

@Component({
  selector: "app-confirm-modal",
  templateUrl: "./confirm-modal.component.html",
  styleUrls: ["./confirm-modal.component.css"]
})
export class ConfirmModalComponent {

  args: {
    title: string;
    message: string;
  } | null = null;

  close!: (val?: any) => void;

}
