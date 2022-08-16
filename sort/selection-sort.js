const selectionSort = (arr) => {
    let n = arr.length;


    let min;
    for (let i = 0; i < n; i++) {
        min = i;


        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(selectionSort([4, 1, 6, 8, 2, 3]));