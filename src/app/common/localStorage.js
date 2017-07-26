export function storeObject(key,value) {
    localStorage.setItem(key,JSON.stringify(value));
}
export function retrieveObject(key) {
    return (JSON.parse(localStorage.getItem(key)));
}
export function removeObject(key){
    localStorage.removeItem(key);
}
