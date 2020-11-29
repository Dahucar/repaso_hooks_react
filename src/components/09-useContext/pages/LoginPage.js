import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

export const LoginPage = () => {
    const { setUser } = useContext(UserContext);
    return (
        <div className="card">
            <h2>LoginPage</h2>
            <hr />

            <button 
                className="btn btn-success btn-sm"
                onClick={ () => setUser({
                    id: new Date().getTime(),
                    completeName: 'Daniel Huenul Cárcamo.'
                }) }
            >
                Login Fake.
            </button>
        </div>
    )
}
