import { Component } from '@angular/core';
import { ParametrosInterface } from '../models/task.interface';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  params: ParametrosInterface[];

  constructor(private infoService: InfoService) {}

  
  ngOnInit() {
    this.infoService.getParams().subscribe(res => this.params = res);
  }


}
