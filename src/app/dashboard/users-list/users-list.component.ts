import { Component, OnInit } from '@angular/core';
import { faPen, faTrash, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { UserDataService } from '../../shared/user-data.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  faPen = faPen;
  faTrash = faTrash;
  faChevronRight = faChevronRight;
  pageNumber = 1;
  usersList: User[] = [];
  totalUsers: number;
  listDisabled = false;
  hideUserDetails = true;
  singleUser: User;
  currentUserIndex: number;
  showLoadingSpinner = false;

  constructor(private userData: UserDataService) { }

  ngOnInit() {
    this.showLoadingSpinner = true;
    this.getAllUsersList(this.pageNumber);
  }

  getAllUsersList(pageNumber) {
    this.showLoadingSpinner = true;
    this.userData.getUsers(pageNumber).subscribe((users: any) => {
      this.totalUsers = users.total;
      users.data.forEach((user: User) => {
        this.usersList.push(user);
      });

    }, error => {
      console.log(error);
    }, () => {
      this.showLoadingSpinner = false;
      if (this.usersList.length === this.totalUsers) {
        this.listDisabled = true;
      } else {
        this.pageNumber++;
      }
    });
  }

  getSingleUserDetails(id, index) {
    this.userData.getSingleUser(id).subscribe((user: any) => {
      this.currentUserIndex = index;
      this.singleUser = user.data;
    }, error => {
      console.log(error);
    }, () => {
      this.showDetails();
    });
  }
  showDetails() {
    this.hideUserDetails = false;
  }

  hideDetails() {
    this.currentUserIndex = -1;
    this.hideUserDetails = true;
  }

}
