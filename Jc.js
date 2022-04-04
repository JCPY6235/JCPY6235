
let bt1 = document.getElementById('btn-1');
let bt2 = document.getElementById('btn-2');
let P_ans = document.getElementById('answer');
let box = document.querySelector('.click-event');


bt1.addEventListener('click', () =>{
P_ans.innerHTML = 
'Bravo..!! La bonne reponse est Bruxelle ☻.!'
P_ans.style.background = 'green'
P_ans.style.transition = '1s'
P_ans.style.transform = "translateX(0)"
})

bt2.addEventListener('click',() =>{
P_ans.innerHTML  = 'Mauvaise reponse Ø.!';
P_ans.style.background = 'red';
P_ans.style.transition = '1s'
P_ans.classList.add('shw-repo')
P_ans.style.transform = 'rotate(0deg)'
})

const circmove = document.getElementById('circ-move');
window.addEventListener('mousemove',(e) => {
    circmove.style.top = e.pageY + "px";
    circmove.style.left = e.pageX + "px";
    circmove.style.transition = '1.5s'
})

window.addEventListener('mousedown',() => {
    circmove.style.transform = "scale(2) translate(-25%, -25%)"
})

window.addEventListener('mouseup',() => {
    circmove.style.transform = "scale(1) translate(-50%, -50%)"
    circmove.style.border = "6px dotted red"

})





let keyContainer = document.getElementById('keypress');
let key = document.getElementById('key');
ring = () =>{
    const audio = new Audio();
    audio.src = "./CD.mp3";
    audio.play();
}

window.addEventListener('keypress', (e) =>{
    
    if (e.key === 'Enter') {
        key.textContent = ''  ;
        keyContainer.style.background = 'black';  
        
        ring()
    } else {
        key.textContent = e.key

        switch (e.key) {
            case 'j':
                keyContainer.style.background = 'pink'
                break;
            case 'A':
                keyContainer.style.background = 'red'
                break;
            case 'f':
                    keyContainer.style.background = 'teal'
                break;
            case '0':
                keyContainer.style.background = 'green'
            break;
                case 't':
                keyContainer.style.background = 'burlywood'
                break;
        
            default: 
                break;
        }
    }    
});


//---------------------------------------//
//Scroll event

const nav = document.querySelector('nav');

window.addEventListener('scroll',() =>{
    if (window.scrollY > 50) {
        nav.style.top = '-5px'
    } else {
        nav.style.top = '-50px'
    }
})
//--------------------------------------------//
//- -------------input event-----------------//

const form = document.querySelector('form');
const inputText = document.querySelector("input[type='text']");
const select = document.querySelector("select");
let text = "";
let Langue = "";

inputText.addEventListener('input',(e) =>{
    text = e.target.value;
})

select.addEventListener('input',(e) =>{
    Langue = e.target.value;
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (ucd.checked & text!=="" & Langue!=="") {
        document.querySelector("form > div").innerHTML = `
        <h4>Text: ${text}</h4>
         <h4>Langue: ${Langue}</h4>
        `
    }
    else if (!ucd.checked & text!=="" & Langue!==""){
        alert('Veuillez acceper les CGV');
    }
    else {
        alert("Veuillez remplir d'abord tous les champs")
    }

})

//-------------------------------------//

const boxes = document.querySelectorAll('.box');


boxes.forEach(box => {
    
    box.addEventListener('mouseover', () =>{
        box.style.transform = "scale(1.2)";

        box.style.backgroundColor = 'burlywood';
        box.style.border = '5px dotted black'
        box.style.borderRadius = '10px'
    });
    box.addEventListener('mouseout', () =>{
        box.style.transform = "scale(1)";
        box.style.backgroundColor = 'black';
        P_ans.innerHTML  = ''
        
    });

});



/*repeat = () =>{

    boxes.forEach(box => {
        setTimeout(()=>{
            box.style.transform  = "scale(1.2)";
            box.style.borderRadius = '50px';
        }, 200);

        setTimeout(()=>{
            box.style.transform  = "scale(1)";
            
        }, 400);
    
    })
}

let a = setInterval(repeat,600);
let click = document.getElementById('click');

click.addEventListener('click',()=>{
    clearInterval(a)
})
*/
