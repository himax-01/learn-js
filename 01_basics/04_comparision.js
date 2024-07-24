console.log("3" > 1)
console.log(1 < "0"); // js automatically compares both as numbers
// but we should avoid doing diiferent datatype comparision

console.log(null == 0)
console.log(null >=0) // ==  and >=/<= works differently, >=/<= converts null into 0, then compares;

console.log(undefined > 0)
console.log(undefined >= 0)
console.log(undefined <= 0);
console.log(undefined<0); //every case has output false


// === means strictly check; it comapares values as well as datatypes.

console.log("3" === 3); //this will give false
/*whereas*/ console.log("3" == 3); //will give true!