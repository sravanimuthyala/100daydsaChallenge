function minVisitorsInKHours(visitors, k){
    if(k>visitors.length) return null;
    let Windowsum=0;
    for(let i=0;i<k;i++){
        Windowsum+=visitors[i];
    }
    let minsum=Windowsum;
    for(let i=k;i<visitors.length;i++){
        Windowsum+=visitors[i]-visitors[i-k];
        minsum=Math.min(Windowsum,minsum);
    }
    return minsum;
}
console.log(minVisitorsInKHours([120, 80, 100, 90, 150, 110, 70] , 3));//Output:270
