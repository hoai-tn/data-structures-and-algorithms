//1 + 2 + 3 +……..+ n

const sum = (n) => {
    if (n === 1) return n
    return n + sum(n - 1)
}
console.log(sum(4))

const fibo = (n) => {
    if (n < 2) return 1
    return fibo(n - 1) + fibo(n - 2)
}

console.log(fibo(10))

const giaithua = (n) => {
    if (n === 0) return 1
    return n * giaithua(n - 1)
}

console.log(giaithua(4))
