import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function useLocale(){

const{t,i18n}=useTranslation();
const[locale,setLocale]=useState("ar");

function languageHandler(){
 
    if(locale=="ar"){
        setLocale("en");
i18n.changeLanguage("en");
    }
else if(locale=="en"){
    setLocale("ar");
    i18n.changeLanguage("ar");
}

}


useEffect(()=>{
    i18n.changeLanguage(locale);

},[])

return{
    t,
    locale,
    languageHandler
}

}