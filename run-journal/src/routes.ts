import { Routes } from "@angular/router";
import { ActivityListComponent } from "./app/activity-list/activity-list.component";
import { MapComponent } from "./app/map/map.component";

export const appRoute: Routes = [
	{ path: "runs", component: ActivityListComponent },
	{ path: "runs/:id", component: MapComponent }
]