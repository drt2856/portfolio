import { createContext, useState } from "react"
import PropTypes from 'prop-types';

export const context = createContext();
export const LANGUAGES_SUPORTED = {
    ENGLISH: "en",
    ESPAÑOL: "es"
}

export function LenguageContext({ children }) {
    const [language, setLanguage] = useState(getLangueageDefaultOrPreference());

    function getLangueageDefaultOrPreference() {
        if (localStorage.getItem("language") === LANGUAGES_SUPORTED.ENGLISH ||
            localStorage.getItem("language") === LANGUAGES_SUPORTED.ESPAÑOL) {
            return localStorage.getItem("language")
        } else {
            const navigatorLanguage = navigator.language;
            if (navigatorLanguage === LANGUAGES_SUPORTED.ESPAÑOL) {
                return LANGUAGES_SUPORTED.ESPAÑOL
            } else {
                return LANGUAGES_SUPORTED.ENGLISH;
            }
        }
    }
    function setPreferencedLanguage(preference) {
        if (preference === LANGUAGES_SUPORTED.ENGLISH ||
            preference === LANGUAGES_SUPORTED.ESPAÑOL) {
            localStorage.setItem("language", preference)
            setLanguage(preference)
        } else {
            console.error("Ha ocurrido un error. Lenguaje no soportado", "Do not suported language");
        }
    }

    return (
        <context.Provider
            value={{
                language,
                setPreferencedLanguage
            }}
        >
            {children}
        </context.Provider>
    )
}
LenguageContext.propTypes = {
    children: PropTypes.any.isRequired
};