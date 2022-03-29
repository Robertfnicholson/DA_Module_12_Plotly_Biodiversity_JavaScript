// API call for spacex
// const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData));

// The syntax used to retrieve data from an external data file, instead of a web API, is the same:
// When reading an external data file such as a CSV or JSON file into a script, you must run a server. 
// You cannot directly open index.html with your browser.
d3.json("samples.json").then(function(data){
    console.log(data);
});

// display the washing frequency (wfreq) of any individual from the dataset:
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

//  sort the wfreq array in descending order.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// display the metadata of any individual from the dataset
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});