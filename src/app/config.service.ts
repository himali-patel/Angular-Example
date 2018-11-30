import { Injectable } from '@angular/core';
import { Configuration } from './configuration';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config = Configuration;
  constructor() { }
   getConfig(){
    return this.config;
  }
}
