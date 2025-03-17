import { createContext, useState } from 'react';


const UserContent = createContext();

const UserProvyder = ( { children }) =>{
    const [token, setToken] = useState(null);

    return (
        <UserContent.Provider value={{token,setToken}}>
            {children}
        </UserContent.Provider>
    );
}

export {UserContent, UserProvyder};