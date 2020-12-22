import { Component, Input, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/shared/user-data.service';
import { CommonsService } from 'src/app/shared/commons.service';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalAddEdit } from 'src/app/models/ModalAddEdit';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    @Input() hideUserDetails = false;
    @Input() singleUser;
    showModal = false;
    message: ModalAddEdit;
    faPen = faPen;
    faTrash = faTrash;

    constructor(
        private userData: UserDataService,
        private commonsService: CommonsService) { }

    ngOnInit() {
        this.commonsService.currentMessage.subscribe((message: ModalAddEdit) => this.message = message);
    }

    deleteUser() { }

    openModal(singleUser) {
        const modalConfig = {
            class: 'show',
            user: singleUser
        };

        this.commonsService.changeMessage(modalConfig);
    }
}
