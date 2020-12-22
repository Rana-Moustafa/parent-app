import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'src/app/shared/commons.service';
import { ModalAddEdit } from './models/ModalAddEdit';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalData: ModalAddEdit;
  constructor(private commonsService: CommonsService) {

  }

  ngOnInit() {
    this.commonsService.currentMessage.subscribe((message: ModalAddEdit) => {
      this.modalData = message;
    });
  }

}
