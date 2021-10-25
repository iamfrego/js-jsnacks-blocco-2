const squadre = [
    {
        nomeSquadra: 'Juve',
        gol: 0,
        falliSubiti: 0,
    },
    {
        nomeSquadra: 'Inter',
        gol: 0,
        falliSubiti: 0,
    },
    {
        nomeSquadra: 'Milan',
        gol: 0,
        falliSubiti: 0,
    },
]

for (let i = 0; i < squadre.length; i++) {

    squadre[i].gol = getRandomIntInclusive(0, 50);

    console.log(squadre[i].gol);

    squadre[i].falliSubiti = getRandomIntInclusive(0, 50);
}

console.log(squadre);

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}