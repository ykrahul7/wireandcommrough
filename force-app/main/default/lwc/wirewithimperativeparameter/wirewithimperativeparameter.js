import { LightningElement, wire } from 'lwc';
import getdatawithparameter from '@salesforce/apex/accountclass.getdatawithparameter'
export default class Wirewithimperativeparameter extends LightningElement {
    selecteddata=''
    rr
@wire(getdatawithparameter,{type:'$selecteddata'})
   mmefuncc({data,error}){
   if(data){
 this.rr=data;
   }
 if(error){
console.log(error);
 }
}
 get selectionaType(){
return [
    {label:'Customer - Channel', value:'Customer - Channel'},
    {label:'Customer - Direct', value:'Customer - Direct'},
];
 }
 handleChange(event){
  this. selecteddata = event.target.value
 }
}
