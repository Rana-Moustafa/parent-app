import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonsService } from 'src/app/shared/commons.service';
import { UserDataService } from 'src/app/shared/user-data.service';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.scss']
})
export class AddEditModalComponent implements OnInit {
  @Input() modalData;
  showModal: string;
  successMsg;
  errorMsg;

  constructor(
    private commonsService: CommonsService,
    private userData: UserDataService) { }

  ngOnInit() {}

  closeModal() {
    this.successMsg = undefined;
    this.errorMsg = undefined;

    this.showModal = this.modalData.class;
    this.commonsService.changeMessage('hide');
  }
  openModal() {
  }

  addOrEditUser(user: NgForm) {

    if (this.modalData.user) {
      this.editUser(this.modalData.user.id, user.value);
    } else {
      this.addUser(user);
    }
  }

  addUser(user) {
    console.log(user.value)
    this.userData.addUser(user.value).subscribe(newUser => {
      user.reset();
      this.successMsg = 'User added successfully';
    }, error => {
      this.errorMsg = 'Error adding user';
    });
  }

  editUser(id, updatedData) {
    const updatedUserData = {
      name: updatedData.username,
      job: updatedData.job
    };

    this.userData.editUser(id, updatedUserData).subscribe(user => {
      this.successMsg = 'User edited successfully';
    }, error => {
      this.errorMsg = 'Error editing user';
    });
  }
}
