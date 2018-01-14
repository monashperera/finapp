import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { FingerprintAIO, FingerprintOptions} from'@ionic-native/fingerprint-aio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private fingerprint: FingerprintAIO, private platform: Platform ) {

  

  }
  async showFingerprintDialog(){
      
    try{
      await this.platform.ready();
      const available = await this.fingerprint.isAvailable();
      console.log(available);
    }
    catch(e){
      console.error(e);
    }
  }

}
