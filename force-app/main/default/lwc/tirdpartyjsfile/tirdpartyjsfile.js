import { LightningElement } from 'lwc';
import Moment  from '@salesforce/resourceUrl/Moment';
import {loadScript } from 'lightning/platformResourceLoader';
export default class Tirdpartyjsfile extends LightningElement {
    timeformats
renderedCallback(){
    loadScript(this, Moment + '/moment/moment.min.js').then(()=>{
    this.momentfunc();
    }).catch((error)=>{
        console.log(error);
    })

}
momentfunc(){
   this.timeformats= moment().format('LLLL');
}




}