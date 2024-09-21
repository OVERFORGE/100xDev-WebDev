const input = [1,2,3,4,5];

const ans = input.map(function(i){
    return i*2;
});

console.log(ans);

const filterAns= input.filter(function(i){
    if(i%2==0){
        return true;
    }else{
        return false;
    }
});

console.log(filterAns);