const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('You have succesfully logged in!');
        document.location.replace('/');
        let loginEl= document.querySelector('#loginLink');
        loginEl.style.display='none';
        let homeEl= document.querySelector('#homeLink');
        homeEl.style.display='block';
        let logoutEl=document.querySelector('#logoutLink');
        logoutEl.style.display='block';
      } else {
        const responseData = await response.json();
        if (response.status === 400 && responseData.message === 'Incorrect email or password. Please try again!') {
          alert('Invalid email or password. Please try again!');
        } else if (response.status === 400 && responseData.message === 'Please log out first!') {
          alert('Please log out first!');
        } else {
          alert('Failed to log in.');
        }
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('You have succesfully registered!');
        document.location.replace('/');
        let loginEl= document.querySelector('#loginLink');
        loginEl.style.display='none';
        let homeEl= document.querySelector('#homeLink');
        homeEl.style.display='block';
        let logoutEl=document.querySelector('#logoutLink');
        logoutEl.style.display='block';

      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  