import { createContext } from "react";
import { food } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {



    const contextValue = {
        food
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider