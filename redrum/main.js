let array = [];

for(let i = 1; i < 501; i++){
    if(i % 3 == 0 & i % 5 == 0){
        array.push("RedRum");
    }
    else if(i % 3 == 0){
        array.push("Red");
    }
    else if (i % 5 == 0){
        array.push("Rum");
    }
    else{
        array.push(i + "");
    }
}

require('fs').writeFile(

    './my.json',

    JSON.stringify(array),

    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
);