// Use the sort function to sort the cities by population growth. 
// Which in turn will call an anonymous function to sort objects by the Increase_from_2016 property.
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
console.log(sortedCities);

// next step is to select only the top five cities by population growth. We'll use slice() to perform this task.
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// use map() to create a separate array of the top five city names, as well as the top five growth figures. 
// Use the parseInt() method to convert from string to integers. Also, recall that all values in the dataset are strings 
var topFiveCityNames = topFiveCities.map(city => city.City);
console.log(topFiveCityNames);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths);
//parseInt(city.Increase_from_2016)converts strings into integers. While JavaScript is flexible enough to interpret numbers enclosed in quotation marks 
// as numbers, it's good practice to explicitly transform, or cast, strings into numbers. 

// Render these arrays in Plotly.
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);