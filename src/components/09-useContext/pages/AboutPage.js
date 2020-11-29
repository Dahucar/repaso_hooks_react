import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

export const AboutPage = () => {
    const { setUser } = useContext(UserContext);
    return (
        <div className="card">
            <h2>AboutPage</h2>
            <hr />

            <button 
                className="btn btn-danger btn-sm"
                onClick={ () => setUser({}) }
            >
                Logout Fake.
            </button>
        </div>
    )
}
