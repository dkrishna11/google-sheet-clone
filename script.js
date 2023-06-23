// Table variables declaration:

const theadRow = document.getElementById("table-heading-row");
const tbody = document.getElementById("table-body");
const columns=26;
const rows=100;

// style buttons
const boldButton=document.getElementById("button-bold");
const underlineButton=document.getElementById("button-underline");
const italicButton=document.getElementById("button-italic");

// align button
const leftAlign=document.getElementById("left-align");
const centerAlign=document.getElementById("center-align");
const rightAlign=document.getElementById("right-align");
const justifyAlign=document.getElementById("justify-align");

const fontSize=document.getElementById("font-size");

// color input 
const bgColor=document.getElementById("bg-color");
const textColor=document.getElementById("text-color");

const fontFamily=document.getElementById("font-family");

// cut copy paste button
const cutButton=document.getElementById("cut-button");
const pasteButton=document.getElementById("paste-button");
const copyButton=document.getElementById("copy-button");

let currentCell;
let cutCell={};




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


// button function:

boldButton.addEventListener("click", ()=>{
    if(currentCell.style.fontWeight=="bold"){
        currentCell.style.fontWeight="normal";
    }
        
    else {
        currentCell.style.fontWeight="bold";
    }
})

underlineButton.addEventListener("click", ()=>{
    if(currentCell.style.textDecoration=="underline")
        currentCell.style.textDecoration="none";
    else currentCell.style.textDecoration="underline";
})
italicButton.addEventListener("click", ()=>{
    if(currentCell.style.fontStyle=="italic")
        currentCell.style.fontStyle="normal";
    else currentCell.style.fontStyle="italic";
})

// align button:

leftAlign.addEventListener("click", ()=>{
    currentCell.style.textAlign="left";
});

centerAlign.addEventListener("click", ()=>{
    currentCell.style.textAlign="center";
});

rightAlign.addEventListener("click", ()=>{
    currentCell.style.textAlign="right";
});


justifyAlign.addEventListener("click", ()=>{
    currentCell.style.textAlign="justify";
});


fontSize.addEventListener("change", ()=>{
    currentCell.style.fontSize=fontSize.value;
})

//background color:
bgColor.addEventListener("click", ()=>{
    currentCell.style.backgroundColor=bgColor.value;
})

// text color:
textColor.addEventListener("click", ()=>{
    currentCell.style.color=textColor.value;
})

// font family:
fontFamily.addEventListener("click", ()=>{
    currentCell.style.fontFamily=fontFamily.value;
})


// cut copy and paste button

cutButton.addEventListener("click", ()=>{
    cutCell={
        style:currentCell.style.cssText,
        text: currentCell.innerText
    }
    currentCell.innerText="";
    currentCell.style=null;
});

pasteButton.addEventListener("click", ()=>{
    currentCell.style=cutCell.style;
    currentCell.innerText=cutCell.text;
})


