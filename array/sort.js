const swap = (array, index1, index2) => {
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}

const selectSort = (a) => {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                swap(a, i, j)
            }
        }
    }
}
// insertion sort O(n^2) danh cho giao duc khong phu hop du lieu lon
const insertionSort = (a) => {
    for (let i = 1; i < a.length; i++) {
        let last = a[i]
        let j = i
        while (j > 0 && last < a[j - 1]) {
            a[j] = a[j - 1]
            j--
        }
        if (i !== j) a[j] = last
    }
}

const bubbleSort = (a) => {
    for (let i = 0; i < a.length; i++) {
        for (let j = a.length - 1; j > i; j--) {
            if (a[j] < a[j - 1]) {
                swap(a, j, j - 1)
            }
        }
    }
}
const partition = (a, l, r) => {
    const x = a[r]
    let i = l - 1
    for (let j = l; j <= r; j++) {
        if (a[j] <= x) {
            i++ // +1 de swap pt lon hon pivot voi pt nho hon pivot
            swap(a, i, j)
        }
    }
    i++ // +1 de pt > pivot de swap -> dua pivot ve giua
    swap(a, i, r)
    return i
}
const quickSortC = (a, l, r) => {
    if (l > r) return
    let pivot = partition(a, l, r)
    quickSort(a, l, pivot - 1)
    quickSort(a, pivot + 1, r)
}

const quickSort = (a) => {
    if (a.length < 2) return a

    // *** lấy phần tử cuối của 'array' làm 'pivot'
    const pivotIndex = a.length - 1
    const pivot = a[pivotIndex]

    const left = []
    const right = []

    let currentItem
    // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
    for (let i = 0; i < pivotIndex; i++) {
        currentItem = a[i]

        if (currentItem < pivot) {
            left.push(currentItem)
        } else {
            right.push(currentItem)
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}
let array = [2, 10, 9, 3, 2, 8, 5, 1, 3, 2, 4]
/* selectSort(array) */
insertionSort(array)
// bubbleSort(array);
//  const arrQuickSort = quickSort(array);
//  console.log(arrQuickSort);
console.log(array)
