









function deretAngkaGenap(n){

    if (n < 1){
        console.log(0);
    } else{
        deretAngkaGenap(  n-1  )

        // condition : only print if n is even numbers
        if(n % 2 == 0 ){
            //statement if true
            console.log(n);
        };
        
    };



};

deretAngkaGenap(8)