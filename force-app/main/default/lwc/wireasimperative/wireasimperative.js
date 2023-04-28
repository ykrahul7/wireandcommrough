import { LightningElement, wire } from 'lwc';
import getaccountdata from '@salesforce/apex/accountclass.getaccountdata'
export default class Wireasimperative extends LightningElement {
    getdatas
@wire(getaccountdata)
WII({data,error}){
if (data){
this.getdatas= data.map(item =>{
const refreshitem=item.type ==='Customer - Direct' ? 'Direct':item.type ==='Customer - Channel' ? 'channel':'.....'
return{...item,refreshitem}
})
}
if(error){
console.log(error);
}
}

}