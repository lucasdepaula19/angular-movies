import { Component } from "@angular/core";

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  title = "CodeSandbox";
  filter = "";

  onInputChange(name) {
    console.log(name);
  }
}