import React from 'react';
import { data } from '../data';
import { DiJsBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";
const Vestine = () => {
    return (
        <div>
            <h2>VESTINE</h2>
            <div className='row pb-5'>
                <div className='col-lg-4 col-md-6 col-sm-12 p-1'>
                    <span><DiHtml5 size="2rem" className='m-1' /> {data.skills.a.title}</span>
                    <div className='progress'>
                        <div className='progress-bar bg-warning'>{data.skills.a.perc}</div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 p-1'>
                    <span><DiCss3 size="2rem" className='m-1' /> {data.skills.b.title}</span>
                    <div className='progress'>
                        <div className='progress-bar bg-warning'>{data.skills.b.perc}</div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 p-1'>
                    <span><DiJsBadge size="2rem" className='m-1'/> {data.skills.c.title}</span>
                    <div className='progress'>
                        <div className='progress-bar bg-warning'>{data.skills.c.perc}</div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 p-1'>
                    <span><DiReact size="2rem" className='m-1' /> {data.skills.d.title}</span>
                    <div className='progress'>
                        <div className='progress-bar bg-warning'>{data.skills.d.perc}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vestine;
