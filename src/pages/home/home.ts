import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { FingerprintAIO, FingerprintOptions} from'@ionic-native/fingerprint-aio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fingerprintOptions: FingerprintOptions
  constructor(private fingerprint: FingerprintAIO, private platform: Platform ) {
    this.fingerprintOptions = {

      clientId: 'Fingerprint-Demo',
    clientSecret: 'password', //Only necessary for Android
    disableBackup:true,  //Only for Android(optional)
    localizedFallbackTitle: 'Use Pin', //Only for iOS
    localizedReason: 'Please authenticate' //Only for iOS
    }
  

  }
  async showFingerprintDialog(){
      
    try{
      await this.platform.ready();
      const available = await this.fingerprint.isAvailable();
      console.log(available);
      if( available === "OK"){
        const result = await this.fingerprint.show(this.fingerprintOptions);
        console.log(result);
      }
    }
    catch(e){
      console.error(e);
    }
  }

}
 