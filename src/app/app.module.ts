import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "../AppRoutingModule";
import { HelloRoute } from "../components/HelloRoute";
import { MovieComponent } from "../movie/movie.component";
import { SearchComponent } from "../search/search.component";



@NgModule({
  declarations: [AppComponent, HelloRoute, MovieComponent, SearchComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
