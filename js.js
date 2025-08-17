 //acts as a placeholder for creatediv
 //why is my prompt doing double
 
function askDiv(){
    
    let size = prompt("How many dimensions: ");
    if(size === undefined){
        alert("Please type according to the range")
    }
        return size;

}

size =  askDiv()
function createDiv(size){
   
    const outerscreen = document.querySelector(".container");
    for(let i=0; i<size; i++){
        const col = document.createElement("div");
        col.classList.add("col");
            for(let j=0; j<size;j++){
                const row = document.createElement('div');
                row.classList.add("row");
               row.style.border = "1px solid #504f4fff"; //add to button size
                col.appendChild(row);
            }
                col.style.background =  "#ffffffff";
               col.style.border= "1px solid white";
                col.style.borderLeft= "none";
                col.style.borderRight= "none";     
                col.style.borderBottom= "none";
                outerscreen.style.border="1px solid #504f4fff";
                outerscreen.appendChild(col);
        }
    
}
createDiv(40)


//features of sidepanel
const sidepanel = document.querySelector(".features-container");
sidepanel.style.border="1px solid black";

//blue button click will allow you to access blue
function changeToBlue(e){
    e.currentTarget.style.backgroundColor = "blue";
}
function changeToRed(e){
    e.currentTarget.style.backgroundColor = "red";
}
function changeToYellow(e){
    e.currentTarget.style.backgroundColor = "yellow";
}
function eraseColor(e){
    e.currentTarget.style.backgroundColor = "#ffffffff";
}
function randomColor(e){
    const randomColor = Math.floor(Math.random()*16777215).toString(16); //value hex code
    e.currentTarget.style.backgroundColor = "#" + randomColor;
}
function fillBucket(e){
//gets override from other colors
    e.currentTarget.style.backgroundColor = "pink";
}




document.querySelector(".blue").onclick = function(){ //once button is clickthe function changetoblue is activated
    const div = document.querySelectorAll(".row") 
    div.forEach(function(divs){     
    divs.addEventListener("mouseover", changeToBlue)
})
}

document.querySelector(".red").onclick = function(){ //once button is clickthe function changetoblue is activated
    const div = document.querySelectorAll(".row") 
    div.forEach(function(divs){ 
    divs.addEventListener("mouseover", changeToRed)
})
}

document.querySelector(".yellow").onclick = function(){ //once button is clickthe function changetoblue is activated
    const div = document.querySelectorAll(".row") 
    div.forEach(function(divs){ 
    divs.addEventListener("mouseover", changeToYellow)
})
}

document.querySelector(".eraser").onclick = function(){ //once button is clickthe function changetoblue is activated
    const div = document.querySelectorAll(".row") 
    div.forEach(function(divs){ 
    divs.addEventListener("mouseover", eraseColor)
})
}


document.querySelector(".random").onclick = function(){ //once button is clickthe function changetoblue is activated
    const div = document.querySelectorAll(".row") 
    div.forEach(function(divs){ //iterate over each pixel row
    divs.addEventListener("mouseover", randomColor)
})
}

document.querySelector(".bucket").onclick = function(){
   const canvas  = document.querySelectorAll(".col") //need to select the whole container44
   canvas.forEach(function(cols){
    cols.addEventListener("mouseover", fillBucket)
  
   })
  
}

document.querySelector(".restart").onclick = function (){
    location.reload();
    return false;
}

document.querySelector(".size").onclick = function changeGrid(){
 
}
