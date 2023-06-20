
async function postData(url, status) {
  var data = new URLSearchParams();
  data.append("estado", status);
  return await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      mode: "no-cors",
      body: data.toString()
    })
};
async function emailData(url) {
  return await fetch(url, {
      method: 'GET',
      mode: "no-cors",
    })
};

const imgWater = document.getElementById('water-image');
const waterText = document.getElementById('water-text');

imgWater.addEventListener('load', function() {
  const source = imgWater.getAttribute('src');
  if (source === '/0.jpeg') {
    waterText.textContent = 'Water supply unavailable! Please contact your provider.';
  } else {
    waterText.textContent = 'Your water supply is available';
  }
});


// Event listener for the "ON" button
document.getElementById('Pumpon').addEventListener('click', () => {
 postData("https://maker.ifttt.com/trigger/pump_on/json/with/key/nSSFKLha20-2cQC3EK0ztO7wfFEUCsxiM7UYGf-C0xx", 1);
});

// Event listener for the "OFF" button
document.getElementById('Pumpoff').addEventListener('click', () => {
  postData("https://maker.ifttt.com/trigger/pump_off/json/with/key/nSSFKLha20-2cQC3EK0ztO7wfFEUCsxiM7UYGf-C0xx", 0);
});

document.getElementById('email').addEventListener('click', () => {
  postData("https://maker.ifttt.com/trigger/pump_off/json/with/key/nSSFKLha20-2cQC3EK0ztO7wfFEUCsxiM7UYGf-C0xx");
});