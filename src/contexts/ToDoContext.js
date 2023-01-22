import { createContext, useState } from "react";

export const ToDoContext = createContext();

export function ToDoContextProvider({children}){

    const [listNumber, setListNumber] = useState(0);
    


    return <ToDoContext.Provider value={{listNumber, setListNumber}}>{children}</ToDoContext.Provider>

}