document.addEventListener('DOMContentLoaded', () => {
    const loginr = document.querySelector('.login-section');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const registerPasswordField = document.getElementById('register-password'); 
    const registerLoginField = document.getElementById('register-username')
    const users = []; 

    registerLink.addEventListener('click', () => {
        loginr.classList.add('active');
    });
    loginLink.addEventListener('click', () => {
        loginr.classList.remove('active');
    });

    const registerButton = document.querySelector('.register .btn');
    registerButton.addEventListener('click', (event) => {
        event.preventDefault();

        const username = registerLoginField.value;
        const password = registerPasswordField.value;

        if (username && password.length >= 8) {
           
            const userExists = users.some(user => user.username === username);
            if (userExists) {
                alert("User already exists! Please log in.");
            } else {
                users.push({ username, password });
                alert("Welcome! You have been successfully added to the array");
                console.log("Current users:", users);
            }
        } else {
            alert("Please enter a valid username and a password with at least 8 characters.");
        }
    });

    
    const passwordStrength = document.createElement('p');
    passwordStrength.style.fontSize = '17px';
    passwordStrength.style.marginTop = '5px';
    passwordStrength.style.color = 'white';
    registerPasswordField.parentElement.appendChild(passwordStrength);

    registerPasswordField.addEventListener('input', () => {
        const value = registerPasswordField.value;

        if (value.length < 8) {
            passwordStrength.textContent = 'Password too short';
            passwordStrength.style.color = 'red';
        } else if (value.length >= 8 && value.length < 12) {
            passwordStrength.textContent = 'Password strength: Medium';
            passwordStrength.style.color = 'orange';
        } else {
            passwordStrength.textContent = 'Password strength: Strong';
            passwordStrength.style.color = 'green';
        }
    });

    
    const loginButton = document.querySelector('.btn');
    loginButton.addEventListener('click', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert(`Welcome back, ${user.username}!`);
            window.location.href= "hello.html"

        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
