const total = (a, i) => {
    let t = 0
    if (i < 0) return 0
    t = a[i] + total(a, i - 1)
    return t
}

console.log(total([1, 2, 3], 2))
