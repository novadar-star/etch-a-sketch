createDiv(10)
function createDiv(size){
    const outerscreen = document.querySelector(".container");
    for(let i=0; i<size; i++){
        const col = document.createElement("div");
        col.classList.add("col");
            for(let j=0; j<size;j++){
                const row = document.createElement('div');
                row.classList.add("row");
                row.style.border = "1px solid white";
                col.appendChild(row);
            }
                col.style.background = "pink";
                col.style.border= "1px solid white";
                col.style.borderLeft= "none";
                col.style.borderRight= "none";
                col.style.borderTop= "none";
                col.style.borderBottom= "none";
                outerscreen.appendChild(col);
        }
    
    
}



//blue button click will allow you to access blue
function changeBackground(e){
    e.currentTarget.style.backgroundColor = "blue";
}

const div = document.querySelectorAll(".row")
div.forEach(function(divs){
    divs.addEventListener("mouseover", changeBackground)
})