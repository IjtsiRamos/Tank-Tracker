
async function postData(status) {
  return await fetch("https://maker.ifttt.com/trigger/switch_pump/json/with/key/nSSFKLha20-2cQC3EK0ztO7wfFEUCsxiM7UYGf-C0xx", {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      mode: "no-cors",
      body: JSON.stringify({estado: status})
})
}

// Event listener for the "ON" button
document.getElementById('Pumpon').addEventListener('click', () => {
 postData(1);
});

// Event listener for the "OFF" button
document.getElementById('Pumpoff').addEventListener('click', () => {
  postData(0);
});
