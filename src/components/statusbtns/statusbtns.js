import React from 'react';

const statusbtns = ({status, setStatus}) => {
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div className="statusbtns">
        <button className={`btn btn-outline-info ${status === 'all' ? 'active' : ''}`} type="button" value="all" onClick={statusHandler}>All</button>
        <button className={`btn btn-outline-info ${status === 'active' ? 'active' : ''}`} type="button" value="active" onClick={statusHandler}>Active</button>
        <button className={`btn btn-outline-info ${status === 'done' ? 'active' : ''}`} type="button" value="done" onClick={statusHandler}>Done</button>
    </div>
    );
};

export default statusbtns;