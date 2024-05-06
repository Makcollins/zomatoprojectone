var arr = [6,2,5,3,9];
n=arr.length

function insertionSort(arr,n){
   for (let i=1;i<n;i++){
    var temp=arr[i];
    var j=i-1;
    while(j>=0 && arr[j]>temp){
        arr[j+1]=arr[j]
        j--;
    }
    arr[j+1]=temp
   }
}
console.log(arr);
insertionSort(arr,n);
console.log(arr);