import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
    console.log(' Aqui de paneo, de chill. ');
    return (
        <button type="button" className="btn btn-success btn-lg btn-block"
            onClick={ () => { 
                increment( 5 );
            }}>
            Block level button    
        </button>
    )
});
