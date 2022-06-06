import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  constructor(private _router: Router) { }


  menus = [
    {
      name: "Tasks",
      icon: "dynamic_feed",
      path: "/"
    },
    {
      name: "Users",
      icon: "group",
      path: "/user"
    },
    {
      name: "Notifications",
      icon: "notifications",
      path: "/notification"
    },
    {
      name: "Analytics",
      icon: "analytics",
      path: "/analytics"
    },
  ]

  activeURL : string = ""

  ngOnInit(): void {
    this.activeURL = this._router.url;
    this._router.events.pipe(filter(event => event instanceof NavigationStart))
    .subscribe((data:any) => this.activeURL = data.url)





  }

}
