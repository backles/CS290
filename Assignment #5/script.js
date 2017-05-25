/*-----------------------------------
Braden Ackles
4/29/2016
script.js
-----------------------------------*/

var body = document.body;							//The document body

function buttonGen(name, parent, functionTo){
	var button = document.createElement("button");	//Create the button
	button.textContent = name;						//Set its name to the name variable
	button.style.margin = "3px";					//Give the button a margin
	parent.appendChild(button);						//Append it to the parent
	button.addEventListener("click", functionTo);	//Add a click listener
}

function tableGen(appender, row, col){
	var currentRow = 1;								//The current Row
	var currentColumn = 1;							//The Current Column
	var maximumRows = row;							//The number of rows in the table
	var maxmimumColumns = col;						//The number of Columns in the table
	var elements = [];
	var parent = appender;
	var selected = function(row1, column1){			//checking if going out of bounds
		if(row1 > maximumRows || row1 < 1){
			return;
		}
		else if(column1 > maxmimumColumns || column1 < 1){
			return
		}
		elements[currentRow-1][currentColumn - 1].style.border = "1px solid";
		elements[row1 - 1][column1 - 1].style.border = "3px solid";
		currentRow = row1;
		currentColumn = column1;
	}
	var tableBuilder = function(){
		var table = document.createElement("table");		//create table
		var tableHead = document.createElement("thead");	//create table head
		var tableBody = document.createElement("tbody");	//create table body
		var headRow = document.createElement("tr");			//create table row
		tableHead.appendChild(headRow);						//Attach the head row to the table head
		table.appendChild(tableHead);						//Attach table header to the body
		table.appendChild(tableBody);						//Attach table body to the table
		table.style.border = "1px solid";					//Set border to the table
		for(var i = 1; i < col + 1; i++){
			var row2 = document.createElement("th");
			row2.textContent = "Header " + (i);
			row2.style.border = "1px solid";
			tableHead.appendChild(row2);
		}
		for(var x = 1; x < row + 1; x++){
			var row3 = document.createElement("tr");
			var rowElements = [];
			for(var y = 1; y < col + 1; y++){
				var currentCell = document.createElement("td");
				currentCell.textContent = "( " + y + ", " + x + " )";
				currentCell.style.border = "1px solid";
				row3.appendChild(currentCell);
				rowElements.push(currentCell);
			}
			table.appendChild(row3);
			elements.push(rowElements);
		}
		parent.appendChild(table);
		selected(1,1);
	}();
	this.MarkCurrent = function(){
		elements[currentRow - 1][currentColumn - 1].style.background = "yellow";
	}
	this.Move = function(whereMove){
		if(whereMove == "up"){
			selected(currentRow - 1, currentColumn);		//If Up is pressed
		}
		else if(whereMove == "down"){
			selected(currentRow + 1, currentColumn);		//If down is pressed
		}
		else if(whereMove == "left"){
			selected(currentRow, currentColumn - 1);		//If left is pressed
		}
		else if(whereMove == "right"){
			selected(currentRow, currentColumn + 1);		//IF right is pressed
		}		
	};
}

//Create everything
var buildTable = new tableGen(body, 3, 4);
buttonGen("UP", body, function() {buildTable.Move("up") });
buttonGen("DOWN", body, function() {buildTable.Move("down")});
buttonGen("LEFT", body, function() {buildTable.Move("left")});
buttonGen("RIGHT", body, function() {buildTable.Move("right")});
buttonGen("Mark Cell", body, buildTable.MarkCurrent);