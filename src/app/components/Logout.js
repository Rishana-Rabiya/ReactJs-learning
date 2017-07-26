import {get} from '../common/fetch';
import {removeObject} from '../common/localStorage';

export function Logout(history) {
    const TOKEN_KEY='Token';
    get('users/logout',(response)=>{
    removeObject(TOKEN_KEY);
    history.push('/');
    });
}
