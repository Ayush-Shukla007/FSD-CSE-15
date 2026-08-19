function  addparagraph(){
    const para=document.createElement("p");
    para.innerText="this is new paragraph";
    para.style.color="red";
    const parant=document.getElementById("para");
    parant.appendChild(para);
    
    
}
 
function removeparagraph(){
    const parent = document.getElementById("para");
    const para = parent.querySelector("p");

    if(para){
        parent.removeChild(para);
    }
}

function removeallparagraph(){
    const parent = document.getElementById("para");

   parent.innerHTML=" ";
}