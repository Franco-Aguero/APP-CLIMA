import axios from 'axios';
export const GET_CITY = 'GET_CITY';
export const ON_CLOSE = 'ON_CLOSE';


export function getCity(ciudad){
    var apiKey = '******';
    return function (dispath){
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey} &units=metric`)
        .then(({data}) => {
            dispath({type:GET_CITY, payload:data});
        })
        .catch(error => alert(error))
        
    }
    
}


export function onClose(id){
    return{
        type:ON_CLOSE,
        payload:id
    }
}