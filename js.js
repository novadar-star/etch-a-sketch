
function createDiv(size){
    const outerscreen = document.querySelector(".container");

    for(let i=0; i<size; i++){
        const col = document.createElement("div");
        col.classList.add("col");
            for(let j=0; j<size;j++){
                const row = document.createElement('div');
                row.classList.add("row");
               // row.style.width="5px";
               // row.style.height="5px";
               // row.style.background = "pink";
                row.style.border = "1px solid blue";
                row.innerText = (i * size) + j;
                row.classList.add("row");
                col.appendChild(row);
            }
                col.style.background = "pink";
                col.style.border = "1px solid black";
            outerscreen.appendChild(col);
        }
    
    
}

createDiv(5)