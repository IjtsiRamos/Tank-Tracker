// Function to send the pump control value
const sendPumpControl = async (controlValue) => {
  const endpoint = 'http://localhost:3009'; // Replace with the actual endpoint provided for controlling the pump
  const response = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({ estado: controlValue }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Pump control value sent successfully!');
  } else {
    alert('Failed to send pump control value.');
  }
};

async function postData(status) {
  return await fetch("https://maker.ifttt.com/trigger/switch_pump/json/with/key/nSSFKLha20-2cQC3EK0ztO7wfFEUCsxiM7UYGf-C0xx", {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({estado: status})
    })
}

// Event listener for the "ON" button
document.getElementById('Pumpon').addEventListener('click', () => {
 postData("0");
});

// Event listener for the "OFF" button
document.getElementById('Pumpoff').addEventListener('click', () => {
  postData("1");
});
