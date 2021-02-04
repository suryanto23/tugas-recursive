



function perkalian(n){

    if ( n == 1 ){
        return 3
    } else {


         return 2 * perkalian(n-1)
         console.log(n);
        
    }



};


console.log(perkalian(1));











// f(1) -> 3 : 3
// f(2) -> 6 : 3 * 2
// f(3) ->12 : 3 * 2 * 2
// f(4) -> 24 : 3 * 2 * 2 * 2
// f(5) -> 48
