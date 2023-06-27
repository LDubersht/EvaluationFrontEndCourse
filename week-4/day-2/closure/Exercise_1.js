const formatter =  function() {
    const capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1); 
    const toSkewerCase = (str) => str.replace(" ","-");
    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}()
//StringFormatter
// const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
console.log(formatter.toSkewerCase("blue box"));//should return blue-box