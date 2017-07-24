
export function Logout(history) {
    var TOKEN_KEY = 'Token';


    fetch('https://localhost:3443/users/logout').then(
        function(response){
            console.log(response);
            localStorage.removeItem(TOKEN_KEY);
            history.push('/');
            }

        );
    }
