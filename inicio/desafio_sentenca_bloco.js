const arr = [1,2,3,4,5,6,7,8,9,10]

function numerosPares(arr) {
    console.log('Numeros Pares')
    arr.forEach(numero => {
        numero % 2 == 0 ? console.log(numero) : false
    });
}

function numerosImpares(arr) {
    console.log('Numeros Impares')
    arr.forEach(numero => {
        numero % 2 != 0 ? console.log(numero) : false
    })
}

numerosImpares(arr)
numerosPares(arr)