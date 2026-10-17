
function getBigger(a,b){
    if (a > b){
        return a
    } else {
        return b
    }
}



function getSmallest(arr){
    if (!arr || arr.length == 0){
        return null;
    }

    let smallest = arr[0]
    for (let i=1; i<arr.length; i++){
        if (smallest > arr[i]){
            smallest = arr[i];
        }
    }
    return smallest;
}

function countValue(arr, num){
    if (num == null){
        return null;
    }
    let counter = 0;
    for (i=0; i<arr.length; i++){
        if (arr[i] === num){
            counter += 1;
        }
    }
    return counter
}

module.exports = {getBigger, getSmallest, countValue};