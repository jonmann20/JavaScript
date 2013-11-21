arr = [
    "thumb",
    "index",
    "middle",
    "ring",
    "pinky",
    "ring",
    "middle",
    "index"
];
list = [];
for (var i = 1, j=0; i < 100; ++i) {
    list[i] = arr[j];

    if (j === 7)
        j = 0;
    else
        ++j;
}

function count(n) {
    // 1: thumb
    // 2: index
    // 3: middle
    // 4: ring
    // 5: pinky
    // 6: ring
    // 7: middle
    // 8: index
    // 9: thumb
    // 10: index
    // ...


    // 1 == 9
    // 2 == 10
    // ...

    n = n % 8;

    switch(n){
        case 1: 
            return "thumb"; 
        case 2: 
        case 8: 
            return "index";
        case 3: 
        case 7: 
            return "middle"; 
        case 4: 
        case 6: 
            return "ring"; 
        case 5:
            return "pinky";
    }
}

console.log(
    count(12),
    list[12]
);
