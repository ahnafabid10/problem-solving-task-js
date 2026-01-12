function isP(p){
    let j = p.split("").reverse().join("");

    if(p==j){
        return true
    }
    else return false

}

let p1 = "racecar";
let j2 = "nitin";
let j3 = "Rama";

console.log(isP(p1));
console.log(isP(j2));
console.log(isP(j3));