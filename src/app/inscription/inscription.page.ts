import { Component, OnInit } from '@angular/core';
import { User} from "../model";
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  user : User;
  nom: string;
  prenom : string;
  phone : string;
  mail : string;
  compte: string;

  constructor( 
    private service : UserService, 
    private router : Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) { 
  
  }

  ngOnInit() {
   
  }
   inscription(){
  
     this.user = {
       name: this.nom,
       firstname: this.prenom,
       tel: this.phone,
       email: this.mail,
       role: "CLIENT",
       status: "EN ATTENTE",
       account: this.compteSelected(),
       password: " ",
       agent: " "
      }
      this.service.postUser(this.user).subscribe(
        response => {
          //console.log(response)
          if(this.nom != null && this.prenom!=null && this.phone!=null && this.mail!=null 
            && this.compteSelected()!=null){
          this.creationAlert();
          window.location.reload();
          this.router.navigate(["home"]);
        }else{
          this.messageToasted("Merci de renseigner tous les champs !");
        }
      }
        )
        

  }

  compteSelected(){
    return this.compte;
  }

  async creationAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenue chez GestiBank',
      message: 'Votre compte a été créé avec succès !' 
      + '\n' 
      + 'Vous pouvez déjà vous connecter sur votre espace client.'
      + '\n'
      + 'Connectez-vous sur votre adresse mail afin de récupérer vos identifiants.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async messageToasted(msg : string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}