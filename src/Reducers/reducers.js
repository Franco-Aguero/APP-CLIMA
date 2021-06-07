import { GET_CITY, ON_CLOSE } from '../Actions/action';
const initialState = {
    cityGet: []
}

function rootReducers(state=initialState, action){
    switch(action.type){

        case GET_CITY:
            return{
                cityGet: state.cityGet.filter(el => el.id === action.payload.id).length > 0 ? [... state.cityGet, null]  :
                state.cityGet.concat(action.payload) 
                
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