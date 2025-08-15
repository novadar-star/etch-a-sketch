const container = document.querySelector(".container");

function createDiv(row){
    for(let i=0; i<row; i++){
    
        const box = document.createElement('div');
        box.style.width = "10px";
        box.style.height = "10px";
        box.style.background = "pink";
        box.style.border = "1px solid #AA336A";
        container.classList.add("box");
        container.appendChild(box);
        }
    
    
}



createDiv(16)