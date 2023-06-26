const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

// 0 to 7 idx 
smallCups.forEach((cup, idx)=>{
    cup.addEventListener('click', ()=> highlightCups(idx))
})

// what i'm pressing on is the fill color
function highlightCups(idx){
    smallCups.forEach((cup,idx2)=>{
        //To toggle the last one
        //if the one we clicking on is full and the next one is not
        if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
            idx--
        }

        //i wanna fill all the ones before it
        if(idx2 <= idx){
            cup.classList.add('full')
        }
        else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    //Get the number of full cups
    const fullCups = document.querySelectorAll('.cup-small.full').length

    const totalCups = smallCups.length
    //console.log(fullCups)   
    
    //we want full cups to hide if it's empty
    if(fullCups ===0){
        percentage.style.visibilitsy = 'hidden'
        percentage.style.height = 0
    }
    else {
        //in css, .cup contains height of 330px
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}`
    }

    //dealing with the remian now
    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0   
    }
    else {
        //visibile if not full
        remained.style.visibility = 'visible'
        //showing the liters
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }

}



