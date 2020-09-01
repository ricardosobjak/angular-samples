import { Component, OnInit } from '@angular/core';
import { AuthUtilService } from 'src/app/auth/auth-util.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass']
})
export class TopbarComponent implements OnInit {

  constructor(private authUtilService: AuthUtilService) { }

  ngOnInit() {
  }

}
