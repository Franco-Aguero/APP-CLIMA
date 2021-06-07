import React from 'react';

import {Link} from 'react-router-dom'
import planet from './Imagenes/Planet.png'
import s from './home.module.css'

export default function Home(){
    return(
        <div className={s.padher}>
            
            <div className={s.title}>
                <span>Global</span>
                <span id={s.weather}>Weather</span>
                <span id={s.app}>App</span>
            </div>

            <div className={s.conteinerImag}>
                <img className={s.img} src={planet} />
            </div>

            <div>
                <Link to="/navBar"><button className={s.btn}>Let's get started!</button></Link>
            </div>
            
        </div>
    )
}