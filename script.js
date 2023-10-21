
let start = document.querySelector('.Start');
let stop = document.querySelector('.Stop');
let reset = document.querySelector('.Reset')


let millisecond = document.querySelector('.millisecond');
let second = document.querySelector('.second')
let minut = document.querySelector('.minut')
let hour = document.querySelector('.hour')

let countermilliesecond = 0;
let countersecond = 0;
let counterminut = 0;
let counterhour = 0;



start.addEventListener('click', function(){
    intervalValid = setInterval(() => {
        countermilliesecond+=1
        millisecond.textContent = countermilliesecond;
        if(countermilliesecond === 100){
            console.log('asfsafmka');
            countermilliesecond = 0
            countersecond += 1;
            second.textContent = countersecond
            
            if(countersecond === 60){
                countersecond = 0;
                counterminut += 1;
                minut.textContent = counterminut

                if(counterminut === 60){
                    counterminut = 0;
                    counterhour += 1;
                    hour.textContent = counterhour;
                }
            }
            // clearInterval(intervalValid)
        }
    }, 1)
})

stop.addEventListener('click', function(){
    clearInterval(intervalValid)
})



function resettt(){
    countermilliesecond = 0;
    countersecond = 0;
    counterminut = 0;
    counterhour = 0;
    millisecond.textContent = countermilliesecond;
    second.textContent = '00'; 
    minut.textContent = '00';   
    hour.textContent = '00'; 

    clearInterval(intervalValid)
}
reset.addEventListener('click', resettt)



let open_Timer = document.querySelector('.open_Timer');
let close_button = document.querySelector('.close_button')

let full_container = document.querySelector('.full_container');
open_Timer.addEventListener('click', function(){
    if(full_container.style.display === 'block'){
        full_container.style.display = 'none';
    } else {
        full_container.style.display = 'block';
    }
    open_Timer.style.display = 'none'
})


function closeBTN(){
    open_Timer.style.display = 'block';
    full_container.style.display = 'none';
}
close_button.addEventListener('click', closeBTN)