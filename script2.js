const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')
const clear = document.querySelector('#clear')

// console.log(buttons)
// console.log(body)

buttons.forEach( function(button){
    button.addEventListener('click', function(e){
        let click = e.target.id
        // console.log(click)
        if (click === 'grey') {
            body.style.backgroundColor = click
        }
        else if (click === 'purple') {
            body.style.backgroundColor = click
        }
        else if (click === 'blue') {
            body.style.backgroundColor = click
        }
        else if (click === 'yellow') {
            body.style.backgroundColor = click
        }
    })
    clear.addEventListener('click', function(e){
        body.style.backgroundColor= 'white'
    })
})


// const colr = (document.querySelectorAll('.button'))
// const body = document.querySelector('body')
// console.log(body)

// colr.forEach(function (click) {
//     click.addEventListener('click', function(e){
//         // console.log(e)
//         // console.log(e.target.id)
//         const touch = e.target.id
//         if(touch === 'grey'){
//             body.style.backgroundColor = touch
//         }
//         else if(touch === 'purple'){
//             body.style.backgroundColor = touch
//         }
//         else if(touch === 'blue'){
//             body.style.backgroundColor = touch
//         }
//         else if(touch === 'yellow'){
//             body.style.backgroundColor = touch
//         }
       
        
//     })
// })

// const clr = document.querySelector('#clear')
// clr.addEventListener('click', function (e) {
//    body.style.backgroundColor = 'white'
// })

