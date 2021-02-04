




//let arr = []

function nilaiArray(times,number){


    arr = []

        if ( times < 1 ){
            
            return arr
             

        } else {

           nilaiArray(times-1 , number) 

           arr.push(number)

           return arr
             
        };
        
       

};


console.log(nilaiArray(3,4));
console.log(nilaiArray(5,7));



// Contoh:
// f(0,3) -> [ ]
// f(-1,5) -> [ ]
// f(1,4) -> [4]
// f(2,3) -> [3, 3]
// f(5,7) -> [7, 7, 7, 7, 7]

