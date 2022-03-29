// API call for spacex
//const url = "https://api.spacexdata.com/v2/launchpads";

//d3.json(url).then(receivedData => console.log(receivedData));

// See data set on console
d3.json("samples.json").then(function(data){
    console.log("hello");
});

// display the metadata of any individual from the dataset:
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});