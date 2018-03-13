function avgArray(arr){

var arrCount =  arr.length;
var arrLenght = arr[0].length;
var resultArr = [];

    for(var i = 0; i < arrLenght; i++){
        let sum = 0;
        for(var y = 0; y < arrCount; y++){
            sum += arr[y][i];
        }
        resultArr[i] = sum / arrCount;
    }
    
    return resultArr;
}