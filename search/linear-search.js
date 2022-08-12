const someArr = [10, 45, 69, 14, 89, 100, 23, 201];


function linearSearch(arr, x) {

    let len = arr.length;

    for (let i = 0; i < len; i++){

        if (x == arr[i]) return i;
    }

    return "not found!"

   

}

console.log(linearSearch(someArr, 202));
