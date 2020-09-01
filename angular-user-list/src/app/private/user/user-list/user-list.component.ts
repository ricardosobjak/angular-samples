import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserListResponse } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  activePage = 1;
  perPage;

  apiResponse: UserListResponse;

  constructor(private userService: UserService) {
    this.perPage = 5;
  }

  ngOnInit(): void {
    this.loadUsers(1);
  }

  public loadUsers(page: number) {
    console.log(this.perPage);
    this.activePage = page;

    this.userService
      .getUsers(page, Number.parseInt(this.perPage))
      .toPromise()
      .then((res: UserListResponse) => {
        console.log(res);
        this.apiResponse = res;
      })
      .catch((error) => {
        console.log(error);
        alert('Falha ao obter a lista de usuários');
      });
  }

  pages(size: number) {
    return new Array(size).keys();
  }
}
