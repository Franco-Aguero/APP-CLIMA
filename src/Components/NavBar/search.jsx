import React from 'react';
import {useState} from 'react'
import {connect} from 'react-redux';
import {getCity} from '../../Actions/action'

import s from './search.module.css';

function Search(props){
 
  const [data, setData] = useState('')

    return(  
          <div className={s.padher} >
              <input className={s.search} type="text" name="data" value={data} onChange={(e) => setData(e.target.value)} placeholder="Search..."/>
              <button type="submit" className={s.btn} onClick={data ? () => props.get_city(data): null }>Add</button>
          </div>                                    /* Verifico que mi data contenga algo */
    )
}
  
  function mapDispatchToProps(dispatch) {
    return {
      get_city: ciudad => dispatch(getCity(ciudad))
    };
  }
  
  export default connect(null, mapDispatchToProps)(Search);
