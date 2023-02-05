// Geog 575 Activity 3
// Gerald Heston
// Feb 5 2023

//Creates an array cityPop with 4 elements, each with 2 objects .city and .population
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
	}
];

// log the array cityPop - yes it's being created correctly
// console.log(cityPop);


// functions initialize() and cities() copied from from example 3.4 - otherwise there was no table for addColumns or addEvents to do anything to

//initialize function called when the script loads
function initialize() {
	cities();
};


function cities() {

	//create the table element
	var table = document.createElement("table");

	//create a header row
	var headerRow = document.createElement("tr");

	//add the "City" and "Population" columns to the header row
	headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>")

	//add the row to the table
	table.appendChild(headerRow);

	//loop to add a new row for each city
	for (var i = 0; i < cityPop.length; i++) {
		//assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend', rowHtml);
	}

	document.querySelector("#mydiv").appendChild(table);
};

//added this function to initialize function addColumns() called when the script loads
function initializeAddColumns() {
	addColumns(cityPop); //had to pass cityPop to the function otherwise the variables were undefined
};

function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){
		// i = 0; thought it might need an itorator but the .forEach doesn't need a separate iterator
		//console.log(i);
		//console.log(cityPop[i].population)
    	if (i == 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>'); //"insertAdjacntHTML should be insertAdjacentHTML
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){  //by now i =1, so we have to subtract 1 to get back to 0
				// console.log(i);
				// console.log(cityPop[i-1].population);
    			citySize = 'Small';
				// console.log(citySize);

    		} else if (cityPop[i-1].population < 500000){
    			// console.log(i);
				// console.log(cityPop[i-1].population);
				citySize = 'Medium'; // "citysize should be "citySize"
				// console.log(citySize);
    		} else {
    			// console.log(i);
				// console.log(cityPop[i-1].population);
				citySize = 'Large';
				// console.log(citySize);
    		};

			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>'); //"insertAdjacntHTML should be insertAdjacentHTML, also <td needed a closing >; also needed to be in the same format as the previous row.insertAdjacentHTML, in (), with 'beforeend' as the 1st argument
			//console.log('<td>' + citySize + '</td>');
    	};
		// i++; thought it might need an itorator but the .forEach doesn't need a separate iterator
    });


};

//added this to initialize addEvents() called when the script loads
function initializeAddEvents() {
	addEvents();
}

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);
			//console.log(random);

			color += random; // random shouldn't be a string

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			};
		
			//console.log(color);

		} // needed a } to close the for loop on line 114

		document.querySelector("table").style.color = color; // needed style.color
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};

//move this line to the end of the script - call the functions after the page DOM loads
document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('DOMContentLoaded', initializeAddColumns);
document.addEventListener('DOMContentLoaded', initializeAddEvents);
