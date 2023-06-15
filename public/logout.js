const logout = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      alert('You have logged out!')
      document.location.replace('/api/user/login');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.querySelector('#logoutLink').addEventListener('click', logout);
  