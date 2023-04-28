import { LightningElement } from 'lwc';
import accoutobject from '@salesforce/schema/account'
import account_name from '@salesforce/schema/Account.Name'
import account_Industry from '@salesforce/schema/Account.Industry'
import account_Phone from '@salesforce/schema/Account.Phone'
import account_Rating from '@salesforce/schema/Account.Rating'
import account_Type from '@salesforce/schema/Account.Type'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Baselightingcomp extends LightningElement {
 objectname= accoutobject;

 fieldlists =[account_name,account_Industry,account_Phone,account_Rating,account_Type];
 handleSuccess(event){
        const toassstmessage =  new ShowToastEvent({
            title: 'Success!',
            message: 'record data is created :'+event.detail.id,
             variant:'success'
          })
     this.dispatchEvent(toassstmessage);
 }


}