document.addEventListener('DOMContentLoaded',()=>{

    let holes = Array.from(document.querySelectorAll('.hole'))
    let score = document.querySelector('.score')
    let timeLeft = document.querySelector('.time-left')
    let startBtn = document.querySelector('#start')

    let gameState = true

    let mole = './images/mole.jpeg'

    let moleRepresentation = ["","","","","","",""]

    const activeMole = (random)=>{
        holes.map((hole,idx)=>{
            // moleRepresentation[random-1]
            if(idx == random){
                hole.classList.add('mole')
            }
        })
    }
    

    let random = function(){
        let value  = Math.floor((Math.random() * 7) )
        console.log("random",value);
        activeMole(value)
        return  value
    }


    let currentScore = 0

    const whack= (hole,idx)=>{
        if(hole.classList.contains('mole') && gameState){
            
            currentScore = currentScore ++
            score.innerText = currentScore
        }
    }

    const counter = ()=>{
        let count = 0

        let interval = setInterval(() => {
            count = count + 1
            random()
            console.log(count);
        }, 500);

        setTimeout(()=>{
            clearInterval(interval)
        },12000)
        
    }

    const handleScore = ()=>{

    }
    
    holes.forEach((hole,idx)=>{
        hole.addEventListener('click',whack(hole,idx))
        handleScore()
        
    })
    counter()
})