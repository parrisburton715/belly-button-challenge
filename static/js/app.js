// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;    

    // Filter the metadata for the object with the desired sample number
    let filteredMetadata = metadata.find(item => item.id === parseInt(sample));

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(filteredMetadata).forEach(([key, value]) => {
      panel.append("p").text(`${key}: ${value}`);
    });

  }).catch((error) => {
    console.log("Error loading JSON file:", error);
  });
  }
  //function to build both charts
  function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log("Loaded data:", data);

    // Get the samples field
    let samples = data.samples;

    console.log("Samples:", samples);

    // Filter the samples for the object with the desired sample number
    let filteredSample = samples.find(item => item.id === sample.toString());
    console.log("Filtered Sample:", filteredSample); 

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = filteredSample.otu_ids;
    let otu_labels = filteredSample.otu_labels;
    let sample_values = filteredSample.sample_values;
    console.log("OTU IDs:", otu_ids);
    console.log("OTU Labels:", otu_labels);
    console.log("Sample Values:", sample_values);

    // Build a Bubble Chart
    let trace1 = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth'
      }
    };

    let dataBubble = [trace1];

    let layoutBubble = {
      title: 'OTU ID Bubble Chart',
      showlegend: false,
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Sample Values' }
    };

    console.log("Bubble Chart Data:", dataBubble); // Log the bubble chart data
    console.log("Bubble Chart Layout:", layoutBubble); // Log the bubble chart layout

    Plotly.newPlot('bubble', dataBubble, layoutBubble);

    buildCharts(940); 

      // For the Bar Chart, map the otu_ids to a list of strings for your yticks
  let yticks = otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse();

  console.log("YTicks:", yticks);

  // Build a Bar Chart
  //Don't forget to slice and reverse the input data appropriately
  let trace2 = {
    x: sample_values.slice(0, 10).reverse(),
    y: yticks,
    text: otu_labels.slice(0, 10).reverse(),
    type: 'bar',
    orientation: 'h'
  };

  //Render the Bar Chart
  let dataBar = [trace2];

    let layoutBar = {
      title: 'Top 10 OTUs Found',
      xaxis: { title: 'Sample Values' },
      yaxis: { title: 'OTU ID' }
    };

    console.log("Bar Chart Data:", dataBar); // Log the bar chart data
    console.log("Bar Chart Layout:", layoutBar); // Log the bar chart layout

    Plotly.newPlot('bar', dataBar, layoutBar);

  }).catch((error) => {
    console.log("Error loading JSON file:", error);
  });
}

    buildCharts(940); 

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

  // Get the names field
  let names = data.names;

  //Use d3 to select the dropdown with id of `#selDataset`
  let dropdown = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  // Hint: Inside a loop, you will need to use d3 to append a new
  // option for each sample name.
  names.forEach((sample) => {
    dropdown.append("option").text(sample).property("value", sample);
  });

  // Get the first sample from the list
  let firstSample = names[0];

  // Build charts and metadata panel with the first sample
  buildCharts(firstSample);
  buildMetadata(firstSample);
  }).catch((error) => {
  console.log("Error loading JSON file:", error);
});
}

// Function for event listener
function optionChanged(newSample) {

// Build charts and metadata panel each time a new sample is selected
buildCharts(newSample);
buildMetadata(newSample);
}

// Initialize the dashboard
init();
