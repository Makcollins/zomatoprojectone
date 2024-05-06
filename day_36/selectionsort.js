var arr=[6,2,5,3,9];
var n =arr.length;
function selectionsort(arr,n){
    for(i=0;i<n-1;i++){
        for(j=i+1;j<n-1;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
}

console.log(arr);
selectionsort(arr,n);
console.log(arr);