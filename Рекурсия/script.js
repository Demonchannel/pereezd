function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
    let g = prompt("Назови число", )
    alert(sumTo(g));

}

function sumTo2(n) {
    if (n == 1) return 1;
    return n + sumTo2(n - 1);
    let g = prompt("Назови число", )
    alert(sumTo2(g))
};

function sumTo3(n) {
    return n * (n + 1) / 2;
    let g = prompt("Назови число", )
    alert(sumTo3(g))
};