// Geog 575 Unit 1, Chapter 2
// Gerald Heston
// 4 Feb 2023

//Example 2.1, 2,2
function myFunc() {
    var myDiv =  document.getElementById("mydiv");
    myDiv.innerHTML = "Hello World";
};

window.onload = myFunc();

//example 2.3

//initialize function called when the script loads
function initialize(){
    cities();
};

//initialize function called when the script loads
function initializeCats(){
    cats();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    }; 

    //add the table to the div in index.html
    var myDiv =  document.getElementById("mydiv");
    myDiv.appendChild(table);
};



// function cats() {
//     //create arrays for Heston cats
//     var cats = ["Oberon", "Chloe 2.0", "Lola", "Peppa", "Gibson", "Pele (honorary cat)"];
//     var humans = ["Gerald", "Debbie", "Debbie", "Holly and Paul", "Alan and Sue", "Claire and Erik"];


//     // create a table element for Heston cats
//     var catTable = document.createElement("table");

//     // create a header row
//     var catHeaderRow = document.createElement("tr");

//     // add the cat name column
//     var catHeader = document.createElement("th");
//     catHeader.innerHTML = "Cat Name";
//     catHeaderRow.appendChild(catHeader);

//     //add the human name column
//     var humanHeader = document.createElement("th");
//     humanHeader.innerHTML = "Human Name";
//     catHeaderRow.appendChild(humanHeader);

//     //add the row to the table
//     catTable.appendChild(catHeaderRow);

//     // loop to add a new row for each cat
//     for (var i = 0; i < cats.length; i++) {
//         var tr = document.createElement("tr");

//         var cat = document.createElement("td");
//         cat.innerHTML = cats[i];
//         tr.appendChild(cat);

//         var human = document.createElement("td");
//         human.innerHTML = humans[i];
//         tr.appendChild(human);

//         catTable.appendChild(tr);
//     };

//     // add the table to the div2 in index.html
//     var myDiv2 = document.getElementById("mydiv2");
//     myDiv2.appendChild(catTable);
// };



// cats v2 - using one array instead of 2 Example 2.4
// function cats() {
//     //defnie an array of objects for cities and population
//     var catHuman = [
//         {
//             cat: 'Oberon',
//             human: 'Gerald'
//         },
//         {
//             cat: 'Chloe 2 and Lola',
//             human: 'Debbie'
//         },
//         {
//             cat: 'Gibson',
//             human: 'Alan and Sue'
//         },
//         {
//             cat: 'Peppa',
//             human: 'Holly and Paul'
//         },
//         {
//             cat: 'Pele (honorary cat)',
//             human: 'Claire and Erik'
//         }

//     ];

//     //create a table element for Heston cats
//     var catTable = document.createElement("table");

//     // create a header row
//     var catHeaderRow = document.createElement("tr");

//     // add the cat name column
//     var catHeader = document.createElement("th");
//     catHeader.innerHTML = "Cat Name";
//     catHeaderRow.appendChild(catHeader);

//     //add the human name column
//     var humanHeader = document.createElement("th");
//     humanHeader.innerHTML = "Human Name";
//     catHeaderRow.appendChild(humanHeader);

//     //add the row to the table
//     catTable.appendChild(catHeaderRow);


//     for (var i = 0; i < catHuman.length; i++) {
//         var tr = document.createElement("tr");

//         var cat = document.createElement("td");
//         cat.innerHTML = catHuman[i].cat;
//         tr.appendChild(cat);

//         var human = document.createElement("td");
//         human.innerHTML = catHuman[i].human;
//         tr.appendChild(human);

//         catTable.appendChild(tr);
//     }
//     //     add the table to the div2 in index.html
//     var myDiv2 = document.getElementById("mydiv2");
//     myDiv2.appendChild(catTable);

// }

// cats v3 Example 2.5 - long form creation of array
// function cats() {
//     //defnie an array of objects for cities and population
//     var catHuman = [];

//     //create the first cat object
//     var oberon = {};
//     //add each property to the object
//     oberon.cat = 'Oberon';
//     oberon.human = 'Gerald';

//     //push the city object into the array
//     catHuman.push(oberon);

//     //create the first cat object
//     var chloe = {};
//     //add each property to the object
//     chloe.cat = 'Chloe 2 and Lola';
//     chloe.human = 'Debbie';

//     //push the city object into the array
//     catHuman.push(chloe);

//     //create the first cat object
//     var peppa = {};
//     //add each property to the object
//     peppa.cat = 'Peppa';
//     peppa.human = 'Holly and Paul';

//     //push the city object into the array
//     catHuman.push(peppa);

//     //create the first cat object
//     var gibson = {};
//     //add each property to the object
//     gibson.cat = 'Gibson';
//     gibson.human = 'Aland and Sue';

//     //push the city object into the array
//     catHuman.push(gibson);

//     //create the first cat object
//     var pele = {};
//     //add each property to the object
//     pele.cat = 'Pele (honorary cat)';
//     pele.human = 'Claire and Erik';

//     //push the city object into the array
//     catHuman.push(pele);

//     //create a table element for Heston cats
//     var catTable = document.createElement("table");

//     // create a header row
//     var catHeaderRow = document.createElement("tr");

//     // add the cat name column
//     var catHeader = document.createElement("th");
//     catHeader.innerHTML = "Cat Name";
//     catHeaderRow.appendChild(catHeader);

//     //add the human name column
//     var humanHeader = document.createElement("th");
//     humanHeader.innerHTML = "Human Name";
//     catHeaderRow.appendChild(humanHeader);

//     //add the row to the table
//     catTable.appendChild(catHeaderRow);


//     for (var i = 0; i < catHuman.length; i++) {
//         var tr = document.createElement("tr");

//         var cat = document.createElement("td");
//         cat.innerHTML = catHuman[i].cat;
//         tr.appendChild(cat);

//         var human = document.createElement("td");
//         human.innerHTML = catHuman[i].human;
//         tr.appendChild(human);

//         catTable.appendChild(tr);
//     }
//     //     add the table to the div2 in index.html
//     var myDiv2 = document.getElementById("mydiv2");
//     myDiv2.appendChild(catTable);

// }


//cats v4 - using one array instead of 2 Example 2.6, while loop
// function cats() {
//     //defnie an array of objects for cities and population
//     var catHuman = [
//         {
//             cat: 'Oberon',
//             human: 'Gerald'
//         },
//         {
//             cat: 'Chloe 2 and Lola',
//             human: 'Debbie'
//         },
//         {
//             cat: 'Gibson',
//             human: 'Alan and Sue'
//         },
//         {
//             cat: 'Peppa',
//             human: 'Holly and Paul'
//         },
//         {
//             cat: 'Pele (honorary cat)',
//             human: 'Claire and Erik'
//         }

//     ];

//     //create a table element for Heston cats
//     var catTable = document.createElement("table");

//     // create a header row
//     var catHeaderRow = document.createElement("tr");

//     // add the cat name column
//     var catHeader = document.createElement("th");
//     catHeader.innerHTML = "Cat Name";
//     catHeaderRow.appendChild(catHeader);

//     //add the human name column
//     var humanHeader = document.createElement("th");
//     humanHeader.innerHTML = "Human Name";
//     catHeaderRow.appendChild(humanHeader);

//     //add the row to the table
//     catTable.appendChild(catHeaderRow);


//     var i = 0;
//     while (i < catHuman.length) {
//         var tr = document.createElement("tr");
        
//         var cat = document.createElement("td");
//         cat.innerHTML = catHuman[i].cat;
//         tr.appendChild(cat);

//         var human = document.createElement("td");
//         human.innerHTML = catHuman[i].human;
//         tr.appendChild(human);

//         catTable.appendChild(tr);
        
//         //increment counter
//         i++;
//     }

//     //     add the table to the div2 in index.html
//     var myDiv2 = document.getElementById("mydiv2");
//     myDiv2.appendChild(catTable);

// }

//cats v5 - using one array instead of 2 Example 2.6, for each loop
// function cats() {
//     //defnie an array of objects for cities and population
//     var catHuman = [
//         {
//             cat: 'Oberon',
//             human: 'Gerald'
//         },
//         {
//             cat: 'Chloe 2 and Lola',
//             human: 'Debbie'
//         },
//         {
//             cat: 'Gibson',
//             human: 'Alan and Sue'
//         },
//         {
//             cat: 'Peppa',
//             human: 'Holly and Paul'
//         },
//         {
//             cat: 'Pele (honorary cat)',
//             human: 'Claire and Erik'
//         }

//     ];

//     //create a table element for Heston cats
//     var catTable = document.createElement("table");

//     // create a header row
//     var catHeaderRow = document.createElement("tr");

//     // add the cat name column
//     var catHeader = document.createElement("th");
//     catHeader.innerHTML = "Cat Name";
//     catHeaderRow.appendChild(catHeader);

//     //add the human name column
//     var humanHeader = document.createElement("th");
//     humanHeader.innerHTML = "Human Name";
//     catHeaderRow.appendChild(humanHeader);

//     //add the row to the table
//     catTable.appendChild(catHeaderRow);


//     catHuman.forEach(function(catObject){
//         var tr = document.createElement("tr");
        
//         var cat = document.createElement("td");
//         cat.innerHTML = catObject.cat;
//         tr.appendChild(cat);

//         var human = document.createElement("td");
//         human.innerHTML = catObject.human;
//         tr.appendChild(human);

//         catTable.appendChild(tr);
//     });

//     //     add the table to the div2 in index.html
//     var myDiv2 = document.getElementById("mydiv2");
//     myDiv2.appendChild(catTable);

// }

//cats v6 - using one array instead of 2 Example 2.6, for each loop with object for loop
// function cats() {
//     //defnie an array of objects for cities and population
//     var catHuman = [
//         {
//             cat: 'Oberon',
//             human: 'Gerald'
//         },
//         {
//             cat: 'Chloe 2 and Lola',
//             human: 'Debbie'
//         },
//         {
//             cat: 'Gibson',
//             human: 'Alan and Sue'
//         },
//         {
//             cat: 'Peppa',
//             human: 'Holly and Paul'
//         },
//         {
//             cat: 'Pele (honorary cat)',
//             human: 'Claire and Erik'
//         }

//     ];

//     //create a table element for Heston cats
//     var catTable = document.createElement("table");

//     // create a header row
//     var catHeaderRow = document.createElement("tr");

//     // add the cat name column
//     var catHeader = document.createElement("th");
//     catHeader.innerHTML = "Cat Name";
//     catHeaderRow.appendChild(catHeader);

//     //add the human name column
//     var humanHeader = document.createElement("th");
//     humanHeader.innerHTML = "Human Name";
//     catHeaderRow.appendChild(humanHeader);

//     //add the row to the table
//     catTable.appendChild(catHeaderRow);


//     catHuman.forEach(function(catObject){
//         var tr = document.createElement("tr");
        
//         for (var property in catObject) {
//             var td = document.createElement("td");
//             td.innerHTML = catObject[property];
//             tr.appendChild(td);
//         }

//         // var cat = document.createElement("td");
//         // cat.innerHTML = catObject.cat;
//         // tr.appendChild(cat);

//         // var human = document.createElement("td");
//         // human.innerHTML = catObject.human;
//         // tr.appendChild(human);

//         catTable.appendChild(tr);
//     });

//     //     add the table to the div2 in index.html
//     var myDiv2 = document.getElementById("mydiv2");
//     myDiv2.appendChild(catTable);

// }

// cats v7 - using one array instead of 2 Example 2.7, with conditionals
function cats() {
    //defnie an array of objects for cities and population
    var catHuman = [
        {
            cat: 'Oberon',
            human: 1971
        },
        {
            cat: 'Chloe 2 and Lola',
            human: 1956
        },
        {
            cat: 'Gibson',
            human: 1958
        },
        {
            cat: 'Peppa',
            human: 1960
        },
        {
            cat: 'Pele (honorary cat)',
            human: 1991
        }

    ];

    //create a table element for Heston cats
    var catTable = document.createElement("table");

    // create a header row
    var catHeaderRow = document.createElement("tr");

    // add the cat name column
    var catHeader = document.createElement("th");
    catHeader.innerHTML = "Cat Name";
    catHeaderRow.appendChild(catHeader);

    //add the human name column
    var humanHeader = document.createElement("th");
    humanHeader.innerHTML = "Human Name";
    catHeaderRow.appendChild(humanHeader);

    //add the row to the table
    catTable.appendChild(catHeaderRow);


    for (var i = 0; i < catHuman.length; i++) {
        var tr = document.createElement("tr");

        var cat = document.createElement("td");
        if (catHuman[i].cat == 'Oberon') {
            cat.innerHTML = 'Obie';
        } else if (catHuman[i].cat == 'Gibson') {
            cat.innerHTML = 'Gibsy';
        } else {
            cat.innerHTML = catHuman[i].cat;
        }
        
        tr.appendChild(cat);
        
        var human = document.createElement("td");

        if (catHuman[i].human > 1965) {
            human.innerHTML = catHuman[i].human;
        } else {
            human.innerHTML = 'retired!';
        };

        tr.appendChild(human);
        
        catTable.appendChild(tr);
    }
    //     add the table to the div2 in index.html
    document.querySelector("#mydiv2").appendChild(catTable);


}


// cats v8 - using one array instead of 2 Example 3.4
function cats() {
    //defnie an array of objects for cities and population
    var catHuman = [
        {
            cat: 'Oberon',
            human: 'Gerald'
        },
        {
            cat: 'Chloe 2 and Lola',
            human: 'Debbie'
        },
        {
            cat: 'Gibson',
            human: "Alan and Sue"
        },
        {
            cat: 'Peppa',
            human: "Holly and Paul"
        },
        {
            cat: 'Pele (honorary cat)',
            human: "Claire and Erik"
        }

    ];

    //create a table element for Heston cats
    var catTable = document.createElement("table");

    // create a header row
    var catHeaderRow = document.createElement("tr");

//add the 'Cat' and Human" header columns to the header row
    catHeaderRow.insertAdjacentHTML("beforeend", "<th>Cat Name</th><th>Human Name</th>");

    //add the row to the table
    catTable.appendChild(catHeaderRow);


    //loop to add a new row for each cat

    for (var i = 0; i< catHuman.length; i++) {
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + catHuman[i].cat + "</td><td>" + catHuman[i].human + "</td></tr>";
        //add the row's heml string to the table
        catTable.insertAdjacentHTML('beforeend', rowHtml);
    }

    for (var i = 0; i < catHuman.length; i++) 
    //     add the table to the div2 in index.html
    document.querySelector("#mydiv2").appendChild(catTable);
    
    document.querySelector("#mydiv2").style.color = 'red';

}
//call the initialize function when the window has loaded
window.onload = initialize();

document.addEventListener('DOMContentLoaded', initializeCats);


