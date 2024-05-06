var arr = [6,2,5,3,9];
let n = arr.length;
function bubblesort(arr,n){
    for(i=0;i<n-1;i++){
        for(j=0;j<n-1;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
};
console.log(arr);
bubblesort(arr,n);
console.log(arr);