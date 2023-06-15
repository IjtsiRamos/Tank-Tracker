const logoutFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('You have logged out successfully!');
    document.location.replace('/');
  } else if(response.status === 400 && responseData.message === 'Please log in first!') {
    alert('You should log in first to log out!');
  } else {
    alert('Failed to log out.');
  }
};

document.querySelector('.logout-btn').addEventListener('click', logoutFormHandler);
