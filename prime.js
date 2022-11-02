function checkPrime(num) {
    let counter = 0;
    for (let i =1;i<=num;i++) {
        if (num%i) {
            counter++;
        }
    }
    if (counter ==2){
        return true;
    }
    return false;
}
let and =checkPrime(13);
if (and == true) {
    console.log("Prime")
} else {
    console.log("Not Prime")
}