const url = "https://api.spacexdata.com/v2/launchpads";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});