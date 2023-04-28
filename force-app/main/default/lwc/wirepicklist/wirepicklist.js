import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import accountobj from '@salesforce/schema/Account'
import industryfield from '@salesforce/schema/Account.Industry'
export default class Wirepicklist extends LightningElement {
    industryoptions=[]
    INDUSTRYCHOSE
@wire(getObjectInfo,{objectApiName:accountobj})
objectdata
@wire(getPicklistValues,{ recordTypeId:'$objectdata.data.defaultRecordTypeId',fieldApiName:industryfield})
kuchbhi({data,error}){
    if(data){
        console.log(data);
      this.industryoptions=this.generatepicklistdata(data);
        console.log('checckkk');
    }
}

// get options() {
//     return [
//         { label: 'New', value: 'new' },
//         { label: 'In Progress', value: 'inProgress' },
//         { label: 'Finished', value: 'finished' },
//     ];
// }
generatepicklistdata(data){
return data.values.map((item)=>({
    label:item.label,value:item.value
}))


}
handleChange(event) {
    this.INDUSTRYCHOSE = event.detail.value;
}


}