import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavlinksComponent } from './navlinks/navlinks.component';
import { NavContent } from './navlinks/nav-content';
import { NavlinkService } from '../../core/services/header/navlink.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, NavlinksComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navContentList: NavContent[] = [];
  navLinkService: NavlinkService = inject(NavlinkService);

  constructor() {
    this.navLinkService.getAllNavLinks().then((navContentList: NavContent[]) => {
      this.navContentList = navContentList;
    })
  }
}
