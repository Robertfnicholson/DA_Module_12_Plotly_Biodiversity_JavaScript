
// Code that creates a dropdown menu of ID numbers dynamically
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

// When a change takes place in the dropdown, call a function
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Now declare the first of these functions buildMetadata().
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result.location);
  });
}

// Now declare the second of these functions buildCharts().
// Reference Emmanuel Martinez's "charts.js" file for correcting code error.
function buildCharts(sample) {
  d3.json("samples.json").then((data) => {
    var Charts = data.charts;
    var resultArray2 = charts.filter(sampleObj => sampleObj.id == sample);
    var result2 = resultArray2[0];
    var PANEL2 = d3.select("#sample-chart");

    PANEL2.html("");
    PANEL2.append("h6").text(result2.location);
  });
}
