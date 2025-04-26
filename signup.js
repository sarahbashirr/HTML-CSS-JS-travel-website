let users = []; 

function signUp() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.querySelector('input[name="user-type"]:checked').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const user = {
        username: username,
        email: email,
        password: password,
        userType: userType
    };

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('signup-form').reset();

    alert('Sign up successful!');
}