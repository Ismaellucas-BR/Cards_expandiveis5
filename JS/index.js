const paineis=document.querySelectorAll('.panel');

paineis.forEach(panel=>{
    panel.addEventListener('click',()=>{
    removeActiveClasses()
    panel.classList.add('active')
})
})

function removeActiveClasses(){
    paineis.forEach(panel=>{
        panel.classList.remove('active')
    })
}


//Funtion for to change icon
function inside(){
    const changeName= document.getElementById('changeName');
    changeName.name="eye-outline";
    console.log(2+2);
}
function outside(){
    const changeName= document.getElementById('changeName');
    changeName.name="eye-off-outline";
    console.log(2+2);
}
inside();
outside();
