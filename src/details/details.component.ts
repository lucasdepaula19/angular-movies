import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})

export class DetailsComponent {
  @Input() details: any;
}