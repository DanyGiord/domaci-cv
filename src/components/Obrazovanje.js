import React from 'react';
import { data } from '../data';

const Obrazovanje = () => {
    return (
        <div>
            <h2>Obrazovanje</h2>
            <div className='row article'>
                <div className="col-3 times">
                    {data.education.time.from.year} - {data.education.time.to.year}
                </div>
                <div className='col-9 article-content'>
                    <h3>{data.education.title}</h3>
                    <p>{data.education.desc}</p>
                </div>
            </div>

            <div className='row article'>
                <div className="col-3 times">
                    {data.education2.time.from.day}.{data.education2.time.from.month}.{data.education2.time.from.year} - {data.education2.time.from.now}
                </div>
                <div className='col-9 article-content'>
                    <h3>{data.education2.title}</h3>
                    <p>{data.education2.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Obrazovanje;

