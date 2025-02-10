import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterNavlinksComponent } from './footer-navlinks/footer-navlinks.component';
import { FooterNavContent } from './footer-navlinks/footer-nav-content';
import { FooterNavlinkService } from '../../core/services/footer/footer-navlink.service';
@Component({
  selector: 'app-footer',
  imports: [CommonModule, FooterNavlinksComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footernavContentList: FooterNavContent[] = [];
  footernavLinkService: FooterNavlinkService = inject(FooterNavlinkService);

  constructor() {
    this.footernavLinkService.getAllFooterNavLinks().then((footernavContentList: FooterNavContent[]) => {
      this.footernavContentList = footernavContentList;
    })
  }
}
