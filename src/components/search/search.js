import React from 'react';

    const search = ({setSearchInput}) => {
    return (
        <input className="search" type="text" placeholder="search" onChange={(e) => setSearchInput(e.target.value)} />
    );
};

export default search;