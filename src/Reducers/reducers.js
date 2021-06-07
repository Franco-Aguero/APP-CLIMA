import { GET_CITY, ON_CLOSE } from '../Actions/actions';
const initialState = {
    cityGet: []
}

function rootReducers(state=initialState, action){
    switch(action.type){

        case GET_CITY:
            return{
                cityGet: state.cityGet.filter(el => el.id === action.payload.id).length > 0 ? [... state.cityGet, null]  :
                state.cityGet.concat(action.payload) /* Asi si funciona. */
                /* cityGet:[...action.payload]  NO FUNCIONA*/
                /* ...state, cityGet:[...action.payload] TAMPOCO */    /* POR QUE NO HACE FALTA DECIRLE DE DONDE VIENE ESE CITYgET */
            }

        case ON_CLOSE:
            return{
               cityGet: state.cityGet.filter(el => el.id !== action.payload)
            }

        default:
            return state;
    }
}

export default rootReducers;