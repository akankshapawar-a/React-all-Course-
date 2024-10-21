import React from "react";
import UserContext from "./UserContext";

const UserContextProvider =({children})=>{
    const [user , setuser]=React.useState(null)
    return(
        <UserContextProvider value={{user ,setuser}}>
            {children}
        </UserContextProvider>
    )
}


export default UserContextProvider