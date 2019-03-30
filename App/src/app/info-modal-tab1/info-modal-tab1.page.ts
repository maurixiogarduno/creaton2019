import { Component, OnInit } from '@angular/core';
import { ParametrosInterface } from '../models/task.interface';
import { InfoService } from '../services/info.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-info-modal-tab1',
  templateUrl: './info-modal-tab1.page.html',
  styleUrls: ['./info-modal-tab1.page.scss'],
})
export class InfoModalTab1Page implements OnInit {

  parametros: ParametrosInterface = {
    task2: '',
    priority: 0,
    campo1P: ''
  };

  parametroId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, 
    private infoService: InfoService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.parametroId = this.route.snapshot.params['id'];
    if (this.parametroId) {
      this.loadParam();
    }
  }

  async loadParam() {
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.infoService.getParam(this.parametroId).subscribe(parametro => {
      loading.dismiss();
      this.parametros = parametro;
    });
  }

  async saveParam() {
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();
 
    if (this.parametroId) {
      this.infoService.updateParam(this.parametros, this.parametroId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/app/user/tabs/tab2');
      });
    } else {
      this.infoService.addParam(this.parametros).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/app/user/tabs/tab2');
      });
    }
  }

  async onRemoveParam(idParam: string) {
    this.infoService.removeParam(idParam);
  }

}
