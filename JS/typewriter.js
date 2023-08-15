let output = document.getElementById('output-best')

let words = [
    'OUR PRODUCTION'
]
let charTurn = 0
let wordTurn = 0
printWord()
function printWord(){
    if(charTurn <= words[0].length){
        output.innerHTML = words[0].substring(0 , charTurn)
        charTurn++
        setTimeout(printWord , 200)
    }else{
        setTimeout(deleteWord , 1000)
    }
}

function deleteWord(){
    if(charTurn >= 0){
        output.innerHTML = words[0].substring(0 , charTurn)
        charTurn--
        setTimeout(deleteWord , 100)
    }else{
        setTimeout(printWord , 500)
    }
}

// let output2 = document.getElementById('output-best2')

// let words2 = [
//     'OUR PRODUCT'
// ]
// let charTurn2 = 0
// let wordTurn2 = 0
// printWord2()
// function printWord2(){
//     if(charTurn2 <= words2[0].length){
//         output2.innerHTML = words2[0].substring(0 , charTurn2)
//         charTurn2++
//         setTimeout(printWord2 , 200)
//     }else{
//         setTimeout(deleteWord2 , 1000)
//     }
// }

// function deleteWord2(){
//     if(charTurn2 >= 0){
//         output2.innerHTML = words2[0].substring(0 , charTurn2)
//         charTurn2--
//         setTimeout(deleteWord2 , 100)
//     }else{
//         setTimeout(printWord2 , 500)
//     }
// }