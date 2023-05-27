let aler = document.getElementById('aler');
let clo = document.getElementById('clo');
let pagebtn = document.getElementById('pagebtn');


clo.addEventListener("click", ()=>{
    aler.style.visibility = 'hidden';
})

pagebtn.addEventListener("mouseover",()=>{
    pagebtn.style.backgroundColor = "#1f421c";
    pagebtn.style.color = "#46a327";
})
pagebtn.addEventListener("mouseout",()=>{
    pagebtn.style.backgroundColor = "#46a327";
    pagebtn.style.color = "white";
})