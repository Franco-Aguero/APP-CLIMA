import { createStore, applyMiddleware,compose} from 'redux';
import Reducer from '../Reducers/reducers';
import thunk from 'redux-thunk';
// Importar reducer también
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    Reducer,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;