public with sharing class accountclass {
    @AuraEnabled(Cacheable=true)
    public static list<account> getaccountdata(){
        return  [select name,id,Type from account where type != null limit 5];
    }

    @AuraEnabled(Cacheable=true)
    public static list<account> getdatawithparameter(string type){
        return  [select name,id,Type from account where Type =:type limit 5];
    }
}