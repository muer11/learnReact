import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';

export default function combineReducers(state = {}, action){
    return {
        counter: counter(state.counter, action),
        userInfo: counter(state.userInfo, action)
    }
}
