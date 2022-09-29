import React from 'react';
import profile from '../profile.png';
import { data } from '../data';
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsFillGeoFill } from "react-icons/bs";
import { BsFillPhoneFill } from "react-icons/bs";


const Main = () => {
    return (
        <div>
            <img src={profile} />

            <h1>{data.info.name} {data.info.surname}</h1>
            <p><BsFillGeoAltFill /> {data.info.adress.street}</p>
            <p><BsFillGeoFill /> {data.info.adress.city} {data.info.adress.country}</p>
            <p><BsFillPhoneFill /> {data.info.phone}</p>
        </div>
    );
}

export default Main;
