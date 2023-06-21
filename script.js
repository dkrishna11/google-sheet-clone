// Table variables declaration:

const theadRow = document.getElementById("table-heading-row");
const tbody = document.getElementById("table-body");
const columns=26;
const rows=100;
let currentCell;





// table heading row

for(let col=0;col<columns;col++){
    let th=document.createElement("th");
    th.innerText=String.fromCharCode(col+65);
    theadRow.append(th);
}
// table body 
for(let row=1;row<=rows;row++){
    let tr=document.createElement("tr");
    let th=document.createElement("th");

    th.innerText=row;
    tr.append(th);
    for(let col=0;col<columns;col++){
        // looping through A to Z 
        let td=document.createElement("td");
        td.setAttribute("contenteditable", "true");
        td.setAttribute("id", `${String.fromCharCode(col+65)}${row}`)
        td.addEventListener("focus", (event)=>{onfocus(event)});
        tr.append(td);
    }
    tbody.append(tr);
}


function onfocus(event){
    currentCell=event.target;
    document.getElementById("currentCell").innerText=currentCell.id;
}
