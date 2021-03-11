import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User}from '../models/models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersSubject = new Subject<any[]>();
  private users: User[] = [];

  public dataBase = "http://127.0.0.1:86/users/";
  private url = "http://127.0.0.1:86/users/";

  constructor(private httpClient : HttpClient) { }

  userConnexion(userEmail: string){
    return this.httpClient.get(this.dataBase + userEmail);
  }
  postUser(User: User){
    return this.httpClient.post(this.dataBase + "add", User);
  }

  createAccount(user) {
    this.httpClient.post(this.url, user).subscribe(
      () => {
        console.log('compte user créé avec succes');
      }, 
      (error) => {
        console.log("erreur: " + error);
      }
    );
 }

 login(email: string, password: string) {
  
  return new Promise(
    (resolve, reject) => {
      this.httpClient.post('http://127.0.0.1:86/authenticate', {email, password}).toPromise().then(
        (data) => {
          resolve(data.valueOf());
          console.log('user authenticated');
        }, (error) => {
          reject(error);
        }
      );
    }
  );

 }



 getClientsPendingDemands() {

  return new Promise(
    (resolve, reject) => {
      this.httpClient.get<any[]>('http://127.0.0.1:86/users/pending').toPromise().then(
        (response) => {
          resolve(response.valueOf());
          //this.emitUsersSubject();
        }, (error) => {
          console.log("erreur : " + error);
        }
      )
    }
  )
}



getClientsPendingDemandsByAgent(matricule: string) {

  return new Promise(
    (resolve, reject) => {
      this.httpClient.get<any[]>('http://127.0.0.1:86/users/pending/' + matricule).toPromise().then(
        (response) => {
          resolve(response.valueOf());
        }, (error) => {
          console.log("erreur : " + error);
        }
      )
    }
  )
}


getUser(email: string) {
  return new Promise(
    (resolve, reject) => {
      this.httpClient.get('http://127.0.0.1:86/user/' + email).toPromise().then(
        (data) => {
          resolve(data.valueOf());
        }, (error) => {
          reject(error);
        }
      );
       
    }
  );
  
}


updateUser(user) {
  this.httpClient.put('http://127.0.0.1:86/users/' + user.email, user).subscribe(
    () => {
      console.log('user modifiée')
    }, 
    (error) => {
     console.log('erreur : ' + error);
    }
  );
 }


 getAgents() {

  return new Promise(
    (resolve, reject) => {
      this.httpClient.get<any[]>('http://127.0.0.1:86/agents').toPromise().then(
        (response) => {
          resolve(response.valueOf());
          //this.emitUsersSubject();
        }, (error) => {
          console.log("erreur : " + error);
        }
      )
    }
  )
}

getAgent(matricule: string) {
  return new Promise(
    (resolve, reject) => {
      this.httpClient.get('http://127.0.0.1:86/agents/' + matricule).toPromise().then(
        (data) => {
          resolve(data.valueOf());
        }, (error) => {
          reject(error);
        }
      );
       
    }
  );
}

deleteUser(email: string) {
  this.httpClient.delete('http://127.0.0.1:86/users/' + email).subscribe(
    () => {
     console.log('agent supprimée');
    },
    (error) => {
      console.log('erreur : ' + error);
    }
  );
}

requestNewPwd(email: string) {
  this.httpClient.put('http://127.0.0.1:86/forgot-password/' + email, null).subscribe(
    () => {
      console.log('new pwd sent')
    }, 
    (error) => {
     console.log('erreur : ' + error);
    }
  );
}

requestCheck(email: string) {
  this.httpClient.put('http://127.0.0.1:86/check-request/' + email, null).subscribe(
    () => {
      console.log('check request sent')
    }, 
    (error) => {
     console.log('erreur : ' + error);
    }
  );
}


validCheck(email: string) {
  this.httpClient.put('http://127.0.0.1:86/valid-check/' + email, null).subscribe(
    () => {
      console.log('check request validated')
    }, 
    (error) => {
     console.log('erreur : ' + error);
    }
  );
}


rejectCheck(email: string) {
  this.httpClient.put('http://127.0.0.1:86/reject-check/' + email, null).subscribe(
    () => {
      console.log('check request rejected')
    }, 
    (error) => {
     console.log('erreur : ' + error);
    }
  );
}

getCheckRequestByAgent(matricule: string) {
  return new Promise(
    (resolve, reject) => {
      this.httpClient.get<any[]>('http://127.0.0.1:86/list-check/' + matricule).toPromise().then(
        (response) => {
          resolve(response.valueOf());
        }, (error) => {
          console.log("erreur : " + error);
        }
      )
    }
  )
}
}
