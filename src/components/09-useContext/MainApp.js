import React, { useState } from 'react'
import { AppRouter } from './AppRouter' 
import { UserContext } from './UserContext'

export const MainApp = () => {
    const [user, setUser] = useState({});
    return (
        // el valor que se pase en el "value" será compartido a los Hijo y todo la gerarquia generada.
        <UserContext.Provider value={{ 
            user,
            setUser
         }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
