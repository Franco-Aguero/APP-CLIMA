import React from 'react';
import Search from './search';
import {Link} from 'react-router-dom'

import henry from '../Imagenes/logoHenry.png'
import s from './navBar.module.css'

export default function NavBar(){
    return( 
        <div className={s.padher}>
            <div>
            <Link to="/navBar"><img className={s.img} src={henry} /></Link>
            </div>
        {/* ------------------- */}
            <div>
                <Link to="/navBar/about"><button className={s.btn}>About</button> </Link>
            </div>
        {/* ------------------- */}
            <div>
                <Search/>
            </div>

        </div>
    )
}