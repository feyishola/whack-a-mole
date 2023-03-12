document.addEventListener('DOMContentLoaded',()=>{

    let holes = Array.from(document.querySelectorAll('.hole'))
    let score = document.querySelector('.score')
    let timeLeft = document.querySelector('.time-left')
    let startBtn = document.querySelector('#start')
    let announce = document.querySelector('.announce')
    let gameState = true

    // let mole = './images/mole.jpeg'

    let moleRepresentation = ["","","","","","",""]

    const nonActiveMole = (id)=>{
        holes.map((hole,idx)=>{
            if(id == idx){
                hole.classList.remove('mole')
            }
            
        })
    }

    const activeMole = (random)=>{
        holes.map((hole,idx)=>{
            
            if(idx == random){
                hole.classList.add('mole')
                setTimeout(()=>{
                    nonActiveMole(idx)
                },1500)
                
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
          
          currentScore++

        //   score.textContent = currentScore

          score.innerHTML = `<span> Score: </span> ${currentScore}`
          console.log("current score",currentScore);
    }else{
        console.log("miss")
    }
}

    const counter = ()=>{
        let count = 0

        let interval = setInterval(() => {
            count = count + 1
            timeLeft.innerHTML = `<span>Count Down:</span> ${count}`
            random()
            console.log(count);
        }, 500);

        setTimeout(()=>{
            clearInterval(interval)
            gameState = false
            timeLeft.innerHTML = `<span>Time Out:</span> ${count}`
            if(currentScore <=5){
                announce.textContent = 'try again'
            }else if(currentScore >5 && currentScore <=10){
                announce.textContent = 'good game'
            }else{
                announce.textContent = 'welldone mole whacker'
            }
            
        },12000)
        
    }

    const endGame = ()=>{
        announce.textContent = ''
        timeLeft.innerHTML = `<span>Count Down:</span> ${0}`
        score.innerHTML = `<span> Score: </span> ${0}`
    }

    // let poorGameScore 
    // let fairGameScore 
    // let greatGameScore 

    // const announcer = (type)=>{
    //         switch(type){
    //             case poorGameScore:
    //                  announce.innerHTML = `try again` 
    //                 break;
    //             case fairGameScore:
    //                 announce.innerHTML = `fair game`
    //             break;
    //             default:
    //                 announce.innerHTML = `welldone mole whacker!!!`
    //         }
    // }



    startBtn.addEventListener('click',()=>{counter()})
    
    holes.forEach((hole,idx)=>{
        hole.addEventListener('click',()=>{whack(hole,idx)})
    })
    
})