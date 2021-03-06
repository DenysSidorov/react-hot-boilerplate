import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from "react-redux";
import App from "./App";
import store from "./store";
import ItemList from "./components/chainik/ItemList";
import TaskList from "./components/7Video/TaskList";
import Task from "./routeComp/Task";
import OffDoc from "./components/officialDoc/"; // chainik blog
import Navigation from "./components/Navigation"
// test
// let myObj = {
//     issues: [1,2,3,4],
//     repository: {
//         id: 5,
//         name: 'Den',
//         books: [
//             {id:4, nameBook: 'Djek London'},
//             {id:77, nameBook: 'Sherlok Holms'}
//         ]},
//     phones: ['234-234','457-2134', '567-457'],
//     counter: 0
// };
// let changeFu = (state) =>{
//     // return {...state, ...{repository: (...state.repository.id +1 )}};
//
//     // return {...state, ...{counter: state.counter +6}} // добавили число
//     //  return {...state, ...{phones: [...state.phones, '999-999-999']}} // добавили телефон
//
// };
// console.log(myObj,  ' оригинал');
// console.log(changeFu(myObj), ' не оригинал');


//const go =  (text) => dispatch => addTo(text);

console.log(<App/>);

store.subscribe(() => console.log(store.getState()));
store.dispatch({type: 'INCREMENT_COUNTER'});
store.dispatch({type: 'INCREMENT_COUNTER'});
store.dispatch({type: 'INCREMENT_COUNTER'});
store.dispatch({type: 'RESET_COUNTER'});
store.dispatch({type: 'LOAD_USSUES', payload: [{id: 1, name: 'Den'}, {id: 2, name: 'Viiii'}]});

// App


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Navigation}>
                <Route path="/blog" component={ItemList}/>
                <Route path="/off" component={OffDoc}/>
                //////// 7 Видео по часу... text="Hello dear friend"
                <Route path="/tasks/" component={TaskList}>
                    <Route path="task/:taskId" component={Task}/>
                </Route>
                <Route path="*" component={() => <div>Error path, Sorry !</div>}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
;


