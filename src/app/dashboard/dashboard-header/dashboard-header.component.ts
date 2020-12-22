import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'src/app/shared/commons.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  faPlus = faPlus;
  constructor(private commonsService: CommonsService) { }

  ngOnInit() {
  }

  addUserModal() {
    const modalConfig = {
      class: 'show',
      user: null
    };

    this.commonsService.changeMessage(modalConfig);
  }

}
