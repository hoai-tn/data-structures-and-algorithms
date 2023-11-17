// function binarySearch(arr, x) {
//   let l = 0;
//   let r = arr.length - 1;
//   let mid;
//   while (r >= l) {
//     mid = l + Math.floor((r - l) / 2);

//     // If the element is present at the middle
//     // itself
//     if (arr[mid] == x) return mid;

//     // If element is smaller than mid, then
//     // it can only be present in left subarray
//     if (arr[mid] > x) r = mid - 1;
//     // Else the element can only be present
//     // in right subarray
//     else l = mid + 1;
//   }

//   // We reach here when element is not
//   // present in array
//   return -1;
// }
function binarySearch(a, x) {
    let l = 0
    let r = a.length - 1
    while (r >= l) {
        let mid = l + Math.floor((r - l) / 2)

        if (a[mid] === x) return mid
        if (a[mid] < x) l = mid + 1
        else r = mid - 1
    }
    return -1
}
var searchInsert = function (nums, target) {
    // for(let i = 0; i < nums.length; i++) {
    //   if(nums[i] === target || nums[i] > target) return i
    // }
    // return nums.length

    let low = 0,
        high = nums.length
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2)
        if (target > nums[mid]) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return low
}
function binarySearchRecursive(arr, l, r, x) {
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2)

        // If the element is present at the middle
        // itself
        if (arr[mid] == x) return mid

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x) return binarySearchRecursive(arr, l, mid - 1, x)

        // Else the element can only be present
        // in right subarray
        return binarySearchRecursive(arr, mid + 1, r, x)
    }

    // We reach here when element is not
    // present in array
    return -1
}
let array = [1, 2, 3, 5, 6, 8]

const result = binarySearch(array, 8)
const a = searchInsert(array, 4)
console.log({ result })
