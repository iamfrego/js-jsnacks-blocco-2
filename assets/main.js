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

//console.log(bike);

let minWeight = 100;

for (let i = 0; i < bike.length; i++) {

    //console.log(bike[i].peso);

    if (bike[i].peso < minWeight) {
        minWeight = bike[i].peso;
    }
    //console.log(minWeight);
}

console.log(minWeight);

