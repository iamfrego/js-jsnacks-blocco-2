// const list = [];
// let sum = 0;

// while (sum < 50) {
//     let n = parseInt(prompt("inserisci un numero"));
//     sum += n;
//     console.log(sum);
//     if (sum < 50) {
//         list.push(n);
//     } else {
//         console.log("Somma elementi maggiore di 50")
//     }
//     console.log(list);
// }


const bike = [
    {
        marca: 'Pinarello',
        peso: '4',
    },
    {
        marca: 'Bianchi',
        peso: '5',
    },
    {
        marca: 'Olympia',
        peso: '6',
    },
]

let lightestBike = bike[0]

bike.forEach(bike => {
    if (bike.peso < lightestBike.peso) {
        lightestBike = bike;
    }
})

console.log(`la bici più leggera è ${lightestBike.marca} e pesa ${lightestBike.peso}kg`);