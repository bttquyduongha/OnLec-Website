import { Component, inject } from '@angular/core';
import { MenuUsersComponent } from "./menu-users/menu-users.component";
import { CommonModule } from '@angular/common';
import { UsersService } from '../../../core/services/home/users/users.service';
import { UsersContent } from './menu-users/userscontent';

@Component({
  selector: 'app-users',
  imports: [MenuUsersComponent, CommonModule],
  template: `
    <!-- Users Section -->
    <section class="users">
      <h2><span class="text-gradient">Hơn 500 người sáng tạo ra hàng nghìn bài giảng mỗi ngày trên Onlec</span></h2>
      <p class="users__subtitle">Các chuyên gia và đội nhóm lựa chọn sử dụng chúng tôi</p>
      <app-menu-users *ngFor="let usersContent of usersContentList" [usersContent]="usersContent"></app-menu-users>
    </section>
  `,
  styleUrls: ['./users.component.scss','../home.component.scss']
})
export class UsersComponent {
  usersContentList: UsersContent[] = [];
  usersService: UsersService = inject(UsersService);

  constructor() {
      this.usersService.getAllUsers().then((usersContentList: UsersContent[]) => {
        this.usersContentList = usersContentList;
      })
    }
}
