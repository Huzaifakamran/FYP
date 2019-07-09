import React from 'react';
import Carrousel from './Carrousel';
import Search from './Search';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>
            <Carrousel/>

        <div className="artist_name">
        <div className="wrapper">Let Us Help You Create</div>
        </div>
            <Search/>
        </div>
    );
};

export default Featured;