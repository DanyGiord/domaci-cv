import React from 'react';
import { data } from '../data';

const Projekti = () => {
    return (
        <div>
            <h2>Projekti</h2>
            <div className='row article'>
                <div className='col-3 time'>
                    {data.projects.time.month}. {data.projects.time.year}
                </div>
                <div className='col-9 article-content'>
                    <h3>{data.projects.title}</h3>
                    <p>{data.projects.desc}</p>
                </div>
            </div>
            <div className='row article'>
                <div className='col-3 time'>
                    {data.title2.time.from.year}-{data.title2.time.to.year}
                </div>
                <div className='col-9 article-content'>
                    <h3>{data.title2.title}</h3>
                    <p>{data.title2.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Projekti;
