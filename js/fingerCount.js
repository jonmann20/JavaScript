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


    while (n >= 9)
        n -= 8;


    var finger = "";

    switch(n){
        case 1: 
            finger = "thumb"; 
            break;
        case 2: 
        case 8: 
            finger = "index";
            break;
        case 3: 
        case 7: 
            finger = "middle"; 
            break;
        case 4: 
        case 6: 
            finger = "ring"; 
            break;
        case 5:
            finger = "pinky";
            break;
    }

    return {
        n: n,
        finger: finger
    };


}

console.log(
    count(49),
    list[49]
);
