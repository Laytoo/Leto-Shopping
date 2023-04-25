import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sort-modal',
  templateUrl: './sort-modal.component.html',
  styleUrls: ['./sort-modal.component.scss'],
})
export class SortModalComponent  implements OnInit {

  radioValue: string;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

  closeModal(){

    this.modalCtrl.dismiss(null,'cancel').then();

  }

  radioChanged(ev:any){
    this.radioValue=ev.target.value;
    this.modalCtrl.dismiss(this.radioValue,'sort').then();


  }

}
