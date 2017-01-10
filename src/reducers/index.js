import {combineReducers} from "redux";
import counterReducer from './counter';
import issuesReducer from './issues';
import { items, itemsHasErrored, itemsIsLoading } from '../components/chainik/reducers/items';
import todos from '../components/officialDoc/reducers/todos';
import visibilityFilter from '../components/officialDoc/reducers/visibilityFilter';

const reducers = combineReducers({
    counter : counterReducer,
    counter2: ()=> 2,
    issues : issuesReducer,

    items,
    itemsHasErrored,
    itemsIsLoading,


    todos,
    visibilityFilter
});


export default reducers;
