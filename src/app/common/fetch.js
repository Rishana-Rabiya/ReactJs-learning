import {retrieveObject} from './localStorage';
const BASE_URL = 'https://localhost:3443/';
const TOKEN_KEY='Token';
export function post(url,data,callback) {
    var credentials;
    if(credentials=retrieveObject(TOKEN_KEY)){
        var token = credentials.token;
    }
    fetch(BASE_URL+url,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            'x-access-token':token
        },
        credentials: "same-origin"
    }).then(function(response) {
        return response.json();
    }).then((res)=>{
        callback(res);
    });
}

export function get(url,callback) {
    var credentials;
    if(credentials=retrieveObject(TOKEN_KEY)){
        var token = credentials.token;
    }
    fetch(BASE_URL+url,{headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token
    }}).then((response)=>{
            return response.json();
      }).then((response)=>{
            callback(response);
      });
}
