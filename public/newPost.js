
const newTipFormHandler = async (event) => {
    event.preventDefault();

    var today = new Date();
    var date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const title = document.querySelector('#title-form').value.trim();
    const description = document.querySelector('#description-form').value.trim();
    const date=date1+' '+time;

    if (title && description) {
      const response = await fetch('/api/post/add', {
        method: 'POST',
        body: JSON.stringify({ title, description,date}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/api/dashboard');
      } else {
        alert('Failed to add new tip');
      }
    }
};
 
  document
  .querySelector('.btn-submit')
  .addEventListener('click', newTipFormHandler);
