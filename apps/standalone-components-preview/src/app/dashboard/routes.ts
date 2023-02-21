import { Route } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'today',
    loadComponent: () => import('./today/today.component').then(mod => mod.TodayComponent)
  }
]