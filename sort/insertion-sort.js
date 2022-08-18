const insertionSort = arr => {

    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        console.log("key: " + key);
        let j;
        for (j = i - 1; (j >= 0 && arr[j] > key); j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = key;
    }

    return arr;


}
console.log(insertionSort([12, 7, 22, 9, 13]));