
function rr(){
let thName = document.querySelector(".thName");
let usser1 = document.getElementById("usser1").value;
let usser2 = document.getElementById("usser2").value;
let gam = document.querySelector(".cont")
let lebl = document.querySelector(".lib");
if(usser1 === "" || usser2 === ""){
lebl.style.display="block"
}else{
thName.style.display="none";
gam.style.display="block";
}
let fh41 = document.querySelector(".h4r1");
let fh412 = document.querySelector(".h4r");
let opil = document.querySelector(".hy3");
let opi2 = document.querySelector(".hy2")
fh41.innerHTML =`${usser1}`;
fh412.innerHTML =`${usser2}`;
opil.innerHTML =`${usser1}`;
opi2.innerHTML =`${usser2}`;
}
let myxo = [
{
    onc1: document.querySelector(".sp")
},

{
    onc1: document.querySelector(".sp1")
},

{
    onc1: document.querySelector(".sp2")
},

{
    onc1: document.querySelector(".sp3")
},
{
    onc1: document.querySelector(".sp4")
},
{
    onc1: document.querySelector(".sp5")
},
{
    onc1: document.querySelector(".sp6")
},
{
    onc1: document.querySelector(".sp7")
},
{
    onc1: document.querySelector(".sp8")
},
]
let xo = "x";
let fh41 = document.querySelector(".h4r1");
let fh412 = document.querySelector(".h4r");
fh41.style.backgroundColor="#00a8ff";
fh412.style.backgroundColor="";
let lip = document.querySelector(".lebl");
let lip1 = document.querySelector(".lebl1");
function ifo(){

    if (myxo[0].onc1.innerHTML === "o" && myxo[1].onc1.innerHTML === "o" && myxo[2].onc1.innerHTML === "o") {
        lip1.innerHTML = parseInt(lip1.innerHTML) + 1;
        for (let j = 0; j <= 8; j++) {
            myxo[j].onc1.innerHTML = "";
        }
    }
else if (myxo[3].onc1.innerHTML === "o" && myxo[4].onc1.innerHTML === "o" && myxo[5].onc1.innerHTML === "o") {
    lip1.innerHTML = parseInt(lip1.innerHTML) + 1;
        for (let j = 0; j <= 8; j++) { 
            myxo[j].onc1.innerHTML = "";
        }
    }else if (myxo[6].onc1.innerHTML === "o" && myxo[7].onc1.innerHTML === "o" && myxo[8].onc1.innerHTML === "o") {
        lip1.innerHTML = parseInt(lip1.innerHTML) + 1;
        for (let j = 0; j <= 8; j++) { 
            myxo[j].onc1.innerHTML = "";
        }
    }else if (myxo[2].onc1.innerHTML === "o" && myxo[4].onc1.innerHTML === "o" && myxo[6].onc1.innerHTML === "o") {
        lip1.innerHTML = parseInt(lip1.innerHTML) + 1;
        for (let j = 0; j <= 8; j++) { 
            myxo[j].onc1.innerHTML = "";
        }
    }else if (myxo[0].onc1.innerHTML === "o" && myxo[4].onc1.innerHTML === "o" && myxo[6].onc1.innerHTML === "o") {
        lip1.innerHTML = parseInt(lip1.innerHTML) + 1;
        for (let j = 0; j <= 8; j++) { 
            myxo[j].onc1.innerHTML = "";
        }
    }
    else if (myxo[1].onc1.innerHTML === "o" && myxo[4].onc1.innerHTML === "o" && myxo[7].onc1.innerHTML === "o") {
        lip1.innerHTML = parseInt(lip1.innerHTML) + 1;
        for (let j = 0; j <= 8; j++) { 
            myxo[j].onc1.innerHTML = "";
        }
    }
    else if (myxo[2].onc1.innerHTML === "o" && myxo[5].onc1.innerHTML === "o" && myxo[8].onc1.innerHTML === "o") {
        lip1.innerHTML = parseInt(lip1.innerHTML) + 1;
        for (let j = 0; j <= 8; j++) { 
            myxo[j].onc1.innerHTML = "";
        }
    }
    else if (myxo[0].onc1.innerHTML === "o" && myxo[3].onc1.innerHTML === "o" && myxo[6].onc1.innerHTML === "o") {
        lip1.innerHTML = parseInt(lip1.innerHTML) + 1;
        for (let j = 0; j <= 8; j++) { 
            myxo[j].onc1.innerHTML = "";
        }
    }
    
}
function iov(){

if (myxo[0].onc1.innerHTML === "x" && myxo[1].onc1.innerHTML === "x" && myxo[2].onc1.innerHTML === "x") {
    lip.innerHTML = parseInt(lip.innerHTML) + 1;
    for (let j = 0; j <= 8; j++) {
        myxo[j].onc1.innerHTML = "";
    }
}else if (myxo[3].onc1.innerHTML === "x" && myxo[4].onc1.innerHTML === "x" && myxo[5].onc1.innerHTML === "x") {
    lip.innerHTML = parseInt(lip.innerHTML) + 1;
    for (let j = 0; j <= 8; j++) {
        myxo[j].onc1.innerHTML = "";
    }
    } else if (myxo[6].onc1.innerHTML === "x" && myxo[7].onc1.innerHTML === "x" && myxo[8].onc1.innerHTML === "x") {
        lip.innerHTML = parseInt(lip.innerHTML) + 1;
    for (let j = 0; j <= 8; j++) {
        myxo[j].onc1.innerHTML = "";
    }
    } else if (myxo[0].onc1.innerHTML === "x" && myxo[4].onc1.innerHTML === "x" && myxo[8].onc1.innerHTML === "x") {
        lip.innerHTML = parseInt(lip.innerHTML) + 1;
    for (let j = 0; j <= 8; j++) {
        myxo[j].onc1.innerHTML = "";
    }
    }else if (myxo[2].onc1.innerHTML === "x" && myxo[4].onc1.innerHTML === "x" && myxo[6].onc1.innerHTML === "x") {
        lip.innerHTML = parseInt(lip.innerHTML) + 1;
    for (let j = 0; j <= 8; j++) {
        myxo[j].onc1.innerHTML = "";
    }
}else if (myxo[1].onc1.innerHTML === "x" && myxo[4].onc1.innerHTML === "x" && myxo[7].onc1.innerHTML === "x") {
        lip.innerHTML = parseInt(lip1.innerHTML) + 1;
        for (let j = 0; j <= 8; j++) { 
            myxo[j].onc1.innerHTML = "";
        }
    }
    else if (myxo[2].onc1.innerHTML === "x" && myxo[5].onc1.innerHTML === "x" && myxo[8].onc1.innerHTML === "x") {
        lip.innerHTML = parseInt(lip1.innerHTML) + 1;
        for (let j = 0; j <= 8; j++) { 
            myxo[j].onc1.innerHTML = "";
        }
    }
    else if (myxo[0].onc1.innerHTML === "x" && myxo[3].onc1.innerHTML === "x" && myxo[6].onc1.innerHTML === "x") {
        lip.innerHTML = parseInt(lip1.innerHTML) + 1;
        for (let j = 0; j <= 8; j++) { 
            myxo[j].onc1.innerHTML = "";
        }
        
        }
        
    }
function you(id){
let getid = document.getElementById(id)
if(xo === "x" && getid.innerHTML == ""){
    fh41.style.backgroundColor="";
    fh412.style.backgroundColor="#00a8ff"
    getid.innerHTML="x";
    xo = "o";
    }else if(xo === "o" && getid.innerHTML == ""){
        fh41.style.backgroundColor="#00a8ff";
fh412.style.backgroundColor=""
        getid.innerHTML="o";
        xo = "x";
    }
iov()
ifo()
for (let j = 0; j <= 8; j++) { 
    if(
        myxo[0].onc1.innerHTML !== ""&&
        myxo[1].onc1.innerHTML !== "" &&
        myxo[2].onc1.innerHTML !== ""&&
        myxo[3].onc1.innerHTML !== ""&&
        myxo[4].onc1.innerHTML !== ""&&
        myxo[5].onc1.innerHTML !== ""&&
        myxo[6].onc1.innerHTML !== ""&&
        myxo[7].onc1.innerHTML !== ""&&
        myxo[8].onc1.innerHTML !== ""
    ){
        console.log("of");
        myxo[0].onc1.innerHTML = ""
        myxo[1].onc1.innerHTML = "" 
        myxo[2].onc1.innerHTML = ""
        myxo[3].onc1.innerHTML = ""
        myxo[4].onc1.innerHTML = ""
        myxo[5].onc1.innerHTML = ""
        myxo[6].onc1.innerHTML = ""
        myxo[7].onc1.innerHTML = ""
        myxo[8].onc1.innerHTML = ""
    }
}
}