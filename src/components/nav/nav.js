import React from 'react';
import Search from '../search';
import Statusbtns from '../statusbtns';

const nav = ({status, setStatus, setSearchInput}) => {
    return (
        <div className="nav">
        <Search setSearchInput={setSearchInput} />
       <Statusbtns status={status} setStatus={setStatus}/>
        </div>
       
    );
};

export default nav;