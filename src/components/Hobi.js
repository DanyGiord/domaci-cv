import React from 'react';
import { data } from '../data';
import { DiJsBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";

const Hobi = () => {
    return (
        <div>
            <h2>HOBI</h2>

            <div className='container d-flex justify-content-center'>
                <DiJsBadge size="5rem" />
                <DiHtml5 size="5rem" />
                <DiCss3 size="5rem" />
                <DiReact size="5rem" />

            </div>
        </div>
    );
}

export default Hobi;
