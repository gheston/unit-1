// Geog 575 Premodule , Chapter 3
// 6 Feb 2023

// functions copied from excample 2.4
//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }]

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

    document.querySelector("#mydiv").appendChild(table);
}

document.addEventListener('DOMContentLoaded',initialize)


// //Example 3.3
// function jsAjax(){
 
//     fetch('data/MegaCities.geojson')
//      .then(function(response) {
//          return response.json();
//         }) // Step 4 convert data to usable form
//         .then(callback) //step 5 send retrieved data to a callback function
// };

// //Example 3.4
// //define callback function
// function callback(response){
//     var myData = response;

//     //pass data to another function
//     nextFunction(myData);

// };

// function nextFunction(data){
//     console.log(data); // contains response data held by myData in callback
// }

// window.onload = jsAjax();

//example 3.6
// function jsAjax35(){
//     //define a variable to hold the data
//     var myData;

//     //basic fetch
//     fetch('data/MegaCities.geojson')
//         .then(function(response){
//             return response.json();
//         }) 
//         .then(function(response){
//             myData = response;

//              //check the data
//              console.log(myData) //data can be accessed here
//         }) 

//     //check the data
//     console.log(myData) // data can't be accessed here - not within the anonymous callback function - undefined
// };

// document.addEventListener('DOMContentLoaded',jsAjax35)

// // Activity 4 - debug AJAX - Gerald's answer
// function debugCallback(response){
//     //console.log(response);
// 	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(response)); //changed myData to response because 'myData' was only defined in the debugAjax() function, but it was passed to debugCallback() as the local variable response
// };

// function debugAjax(){
	
// 	var myData;
	
// 	fetch("data/MegaCities.geojson")
//         .then(function(response) {
//             return response.json(); //added this line to parse the response using json to make the object useful
//         })
//         .then(function(response){ // added these 2 lines to assign the response to myData
//             myData = response; 
       
//             document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData)); //needed a , after 'beforeend'; moved this line to inside the anonymous function with myData so it would be defined
        
//             debugCallback(myData); //moved this line inside the anonmymous function with myData so it would be defined
//         })
// };

// document.addEventListener('DOMContentLoaded',debugAjax); // needs a line to call the function to make things happen

// //this line won't work because myData only exists within the debugAjax function call, here it's undefined
// //document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData)) 

// more consice option suggested by Instructor John Nelson:
// Activity 4 - debug AJAX
function debugCallback(response){
	
    var myData = response;

	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData)); //changed myData to response because 'myData' was only defined in the debugAjax() function, but it was passed to debugCallback() as the local variable response
};

function debugAjax(){
	
	fetch("data/MegaCities.geojson")
        .then(function(response) {
            return response.json(); //added this line to parse the response using json to make the object useful
        })
        .then(debugCallback) //moved this line inside the anonmymous function with myData so it would be defined

};

document.addEventListener('DOMContentLoaded',debugAjax); // needs a line to call the function to make things happen