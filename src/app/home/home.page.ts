import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: any[] = [];
  scrollTo: any;
  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;

  constructor(private toastCtrl: ToastController) {
    this.items = Array.from({ length: 500 }).map((_, i) => `items ${i}`);
    console.log(this.items);
  }

  scrollToIndex() {
    if (this.scrollTo > -1) {
      this.viewPort.scrollToIndex(this.scrollTo, 'smooth');
    }
  }

  async selectItem(item: any) {
    const toast = await this.toastCtrl.create({
      message: item,
      duration: 2000
    });
    toast.present();
  }

}
