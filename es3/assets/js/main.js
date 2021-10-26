const list = [];
let sum = 0;

while (sum < 50) {
    let n = parseInt(prompt("inserisci un numero"));
    sum += n;
    console.log(sum);
    if (sum < 50) {
        list.push(n);
    }
    console.log(list);
}