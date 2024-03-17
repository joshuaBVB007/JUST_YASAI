import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmazonServiceService {

  constructor(private httpClient: HttpClient) { }

  doGetRequestToAmazon(){
    return this.httpClient.get("https://umsda5i2uh3rdlmklccq5tvke40gaddx.lambda-url.eu-west-3.on.aws");
  }
}
