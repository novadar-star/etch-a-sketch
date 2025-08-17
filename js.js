 //acts as a placeholder for creatediv
 //why is my prompt doing double
function askDiv(){
    
    let size = prompt("How many dimensions: ");
    if(size === undefined){
        alert("Please type according to the range")
    }
        return size;

}
askDiv()
function createDiv(size){
    size = askDiv()
    const outerscreen = document.querySelector(".container");
    for(let i=0; i<size; i++){
        const col = document.createElement("div");
        col.classList.add("col");
            for(let j=0; j<size;j++){
                const row = document.createElement('div');
                row.classList.add("row");
                row.style.border = "1px solid white"; //add to button size
                col.appendChild(row);
            }
                col.style.background = "pink";
//                col.style.border= "1px solid white";
                col.style.borderLeft= "none";
                col.style.borderRight= "none";     
                col.style.borderBottom= "none";
                outerscreen.style.border="1px solid black";
                outerscreen.appendChild(col);
        }
    
}
createDiv()


//features of sidepanel
    const sidepanel = document.querySelector(".features-container");
    sidepanel.style.border="1px solid black";

//blue button click will allow you to access blue
function changeBackground(e){
    e.currentTarget.style.backgroundColor = "blue";
}

const div = document.querySelectorAll(".row")
div.forEach(function(divs){
    divs.addEventListener("mouseover", changeBackground)
})