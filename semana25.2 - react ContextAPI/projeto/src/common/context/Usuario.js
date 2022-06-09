import { createContext, useState } from "react"; 

export const UsuarioContext = createContext();

//Context object accepts a displayName string property. React DevTools uses this string to determine what to display for the context.
UsuarioContext.displayName = "Usuário"; // nome que vai aparecer no react devtools

export const UsuarioProvider = ({children})=>{
    const [nome, setNome] = useState("");
    const [saldo, setSaldo] = useState(0);
    return (
        <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
            {children}
        </UsuarioContext.Provider>
    )
}