import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.page.html',
  styleUrls: ['./exo2.page.scss'],
})
export class Exo2Page implements OnInit {

  item: string;

  listItems: Article[];
  //listItems: Array<string>;
  //version plus courte de l'écrire
  // string[];
  constructor(
    private alertController: AlertController,
    private storage: Storage
  ) {
   
   }

  //a chaque etat de ma liste je fais un this.save()

  ngOnInit() {
    this.storage.get('Articles').then(data =>{
      this.listItems = data || []
    })
    //this.listItems = [];
  }
  add(){
    this.listItems.push({ name: this.item, isChecked: false });
    this.item = null;
    this.save();
  }
  cocher(elem: Article){
    elem.isChecked = !elem.isChecked;
    this.save();
  }
  delete(elem){
    this.listItems.splice(this.listItems.indexOf(elem),1);
    this.save();
  }
  showAlert(elem){
    this.alertController.create({
      header: 'Attention',
      subHeader: 'Etes vous sûr de vouloir supprimer l\'article '
      + elem.name,
      buttons: [{ 
        text: 'oui',
        //si oui handler va delete mon produit
        handler: () => this.delete(elem)
       },{ 
         text: 'non',
         }]
    })
    .then(alert => alert.present());
  }

  private save(){
    this.storage.set('Articles',this.listItems);
  }

}
