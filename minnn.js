function teste(ar){
    console.log(Math.max(...ar), 'maior número entre:', ar.toString())   
    console.log(Math.min(...ar), 'menor número entre:', ar.toString())
}


let arrTeste = [90,3,6,5,4,9,8,7]

teste(arrTeste)