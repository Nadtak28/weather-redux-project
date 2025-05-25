import useLocale from "../../hooks/useLocale";


export default function MyButton(){

const{
    locale,
    languageHandler
}=useLocale();

    return(
        <button className="bg-blue-400 w-24 h-10 text-white rounded-lg mt-4" onClick={languageHandler}> {locale=="en"?"Arabic":"انجليزي"}</button>
    );
}