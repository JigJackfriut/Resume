function addTable() {
  // create a table element
  var table = document.createElement("table");
  
  // create the header row
  var headerRow = table.insertRow();
  var headerCell1 = headerRow.insertCell();
  var headerCell2 = headerRow.insertCell();
  headerCell1.innerHTML = "<b>Header 1</b>";
  headerCell2.innerHTML = "<b>Header 2</b>";
  
  // create rows and cells for the table body
  for (var i = 1; i <= 5; i++) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.innerHTML = "Row " + i + " Cell 1";
    cell2.innerHTML = "Row " + i + " Cell 2";
  }
  
  // add the table to the container div
  var container = document.getElementById("table-container");
  container.appendChild(table);
}
