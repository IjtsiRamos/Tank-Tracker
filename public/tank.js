
async function postData(status) {
  var data = new URLSearchParams();
  data.append("estado", status);
  return await fetch("https://maker.ifttt.com/trigger/switch_pump/json/with/key/nSSFKLha20-2cQC3EK0ztO7wfFEUCsxiM7UYGf-C0xx", {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      mode: "no-cors",
      body: data.toString()
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
