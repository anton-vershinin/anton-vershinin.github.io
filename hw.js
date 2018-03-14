var adminLogin = ('admin');
var adminPassword = ('qwerty123456');
var loginSucess = false;

var login = '';
var password = '';
var tryouts = 3;


while (!loginSucess) {
    while (login === '') {
        login = prompt ('Enter login','');
        if (login === '') {
            alert ('Nothing entered! Please enter your login!');
        }
    }
    while (password === '') {
        password = prompt ('Enter password','');
        if (password === '') {
            alert ('Nothing entered! Please enter your password!');
        }
    }
    if (login === adminLogin && password === adminPassword) {
        alert ('Access granted');
        loginSucess = true;
    } else {
        
        login = '';
        password = '';
        tryouts --;
        if (tryouts > 0) {
            alert('Wrong login or username. ' + tryouts + ' login attempts remain.');
        }else{ 
            alert('The login attempt failed. The page will be closed.'); 
        }
    }
}

