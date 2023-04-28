import { LightningElement, api, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import idss from '@salesforce/user/Id'
import opportuniityobj from '@salesforce/schema/Opportunity'
import accountobject from '@salesforce/schema/Account'
import account_phone from '@salesforce/schema/Account.Phone'
import account_Rating from '@salesforce/schema/Account.Rating'
import account_AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue'
import uemail from '@salesforce/schema/User.Email'
import uname from '@salesforce/schema/User.Name'
// const Fields=[uemail,uname];

export default class Wirestarrt extends LightningElement {
userid = idss;
defaultRecordTypeIds
// @ recordId;
// @wire(getRecord,{recordId :'0059D000004sDbHQAU', Fields:['User.Email','User.Name']})
// userdetails(respose){
//    console.log(respose);
//     if(data){
//      console.log(data);
//      console.log('rajjjjjag');
//     }
//     if(error){
//         console.log(error);
//         console.log('rajjjjjagssaf');
//     }

   @wire(getObjectInfo, { objectApiName:accountobject})
   getdatd({data,error}){
if(data){
   console.log(data);
this.defaultRecordTypeIds=data.defaultRecordTypeId;
}
if(error){
    console.log(error);
}

   }
  // objectinfosname=[opportuniityobj,accountobject];
Objectapiiinames = [opportuniityobj, accountobject]

   //@wire(getObjectInfos,{ objectApiName:'$objectinfosname'})
   @wire(getObjectInfos, { objectApiNames: '$Objectapiiinames' })
    userdatss({data,error}){
  if(data){
// console.log(data);
  }
  if(error){
    console.log(error);
  }
    }
}
