





function kelompokAngka(n){

    if ( n  < 1 ){
        return 0

    } else{

        return 1 + kelompokAngka(n - 15)

    };


};

console.log(kelompokAngka(1));



// 15 = 1
// 30 = 2

