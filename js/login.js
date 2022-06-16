function login() {
    var user, password;

    user = document.getElementById("matricula").value;
    password = document.getElementById("password").value;

    if (user == 'vls2191001' && password == '1234') {
        window.location.href = 'biblio.html';
    }
}