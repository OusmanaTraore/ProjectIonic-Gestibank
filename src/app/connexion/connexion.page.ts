import { Component, OnInit } from '@angular/core';
import { User} from '../model';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {


  public email: string;
  public password: string = "";
  userInfos: User;
  constructor(
    private router:Router,
    private service : UserService, 
    public toastController: ToastController,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    // setTimeout(()=>{
    //   this.router.navigateByUrl('devise');
    // },5000);
  }
  
  connexion(){
    console.log(this.password);
    if(this.email!=null && this.password!=null){
      this.service.userConnexion(this.email).subscribe(data =>{
        // console.log(this.userInfos);
        this.userInfos = <User>data;
        if(this.userInfos != null && this.password == this.userInfos.password){
          console.log("Auth Réussie");
          let role = this.userInfos.role;
          console.log(role);
          switch(role) {
            case role = "CLIENT" :
              this.router.navigateByUrl('client');
              break;
              case role = "ADMIN" :
                this.router.navigateByUrl('admin');
                break;
                case role = "AGENT" :
                  this.router.navigateByUrl('agent');
                  break;
                default:
                  this.router.navigateByUrl('connexion');
                  }
                  /*
                  */
           
        } else {
          this.messageToasted("Votre mot de passe est incorrect");
    
        } 
      })

    } else {
      this.messageToasted("Merci de renseigner tous les champs !");
  
    }

}
async messageToasted(msg : string) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}

}
