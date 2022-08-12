const sortedArr = [10, 13, 23, 45, 69, 89, 100, 201, 235];

function binarySearch(arr, low, high, x) {
    console.log(low, high);

    if (low > high) return 'Element not found!'

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == x) {
        return mid;
    }

    if (x < arr[mid]) {
        return binarySearch(arr, low, mid - 1, x)
    } else {
        return binarySearch(arr, mid + 1, high, x)
    }
}

const found = binarySearch(sortedArr, 0, sortedArr.length - 1, 44)
console.log('X is in the index of: ' + found);