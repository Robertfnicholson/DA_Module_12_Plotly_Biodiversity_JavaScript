// API call for spacex
// const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData));

// The syntax used to retrieve data from an external data file, instead of a web API, is the same:
d3.json("samples.json").then(function(data){
    console.log("hello");
});


// Display the data in the browser
//d3.json("samples.json").then(function(data){
//    console.log(data);
// });

// display the metadata of any individual from the dataset:
//d3.json("samples.json").then(function(data){
//    firstPerson = data.metadata[0];
//    Object.entries(firstPerson).forEach(([key, value]) =>
//      {console.log(key + ': ' + value);});
//});