import { useContext} from "react";
import { context } from "../context/lenguageContext";


export function useLanguage() {

    const {language,setPreferencedLanguage} = useContext(context);

    if(!context){
        Error("We need context")
    }
    

    return { language, setPreferencedLanguage }
}