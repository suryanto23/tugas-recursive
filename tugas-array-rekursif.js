




 let arr = []

function nilaiArray(times,number){


        if ( times < 1 ){

            return arr 

        } else {
            
            
            console.log(number);
            console.log(arr);

             arr.push(number)

             console.log(arr);

            

             return nilaiArray(times-1 , number)

            

        };

};


console.log(nilaiArray(1,4));









// Contoh:
// f(0,3) -> [ ]
// f(-1,5) -> [ ]
// f(1,4) -> [4]
// f(2,3) -> [3, 3]
// f(5,7) -> [7, 7, 7, 7, 7]

