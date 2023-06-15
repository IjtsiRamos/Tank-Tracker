const drawGraph = async () => {
  // Get the data for the x and y axis from the API
  const xData = [];
  const yData = [];

  const response = await fetch("/api/post/waterLevel", {
    method: "GET",
  });

  if (response.ok) {
    const data = await response.json();

    for (const row of data) {
      const date = new Date(row.createdAt);
      const xValue = date.toLocaleDateString(); // Convert the date to a string representation
      const yValue = row.waterLevel;

      xData.push(xValue);
      yData.push(yValue);
    }
  } else {
    console.log(response.status);
    console.log("error");
  }

  // Create the line chart
  const ctx = document.getElementById("lineChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: xData,
      datasets: [
        {
          label: "Water Level",
          data: yData,
          borderColor: "blue",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
};

// Call the drawGraph function
drawGraph();
