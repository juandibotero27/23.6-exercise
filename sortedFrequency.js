const sortedFrequency = (arr, frequency) => {
    let count = 0;
    for(let num of arr){
        if(num === frequency)
        count++
    }

    return count
}