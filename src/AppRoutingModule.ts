import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { HelloRoute } from "./components/HelloRoute";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  { path: "hello-route", component: HelloRoute },
  { path: "hello-route/:title", component: HelloRoute }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
